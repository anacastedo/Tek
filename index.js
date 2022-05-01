const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log("listening in port 3000"));
app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
  })
})
app.post('/api', (request, response) => {
  console.log(request.body);
  const data = request.body;
  database.find({ log: `${data.log}`}, function (err, docs) {

  //  console.log(docs.lenght);
    console.log(docs.length);
    //console.log(docs.length=='undefined');
		if (docs.length!=='undefined'){
      //console.log(docs);
      if(data.log===docs[0].log){
        console.log('Profile Already Exists');
        //console.log(docs);
      }
      else{
      database.insert(data);
      response.json({
        status: 'success',
        login: data.log,
      });
    }}
      else{
      console.log('Non Existing Profile');
    //  console.log(docs);

    }
	});

});

app.post('/api_remove', (request, response) => {
  console.log(request.body);
  const data = request.body;
  let apagar=console.log(JSON.stringify(data.log));
  database.remove({log: request.body.log}, {}, function(err, numRemoved){
	});
});
