const express=require ('express');
const Datastore = require('nedb');

const app = express();
app.listen(3000, ()=>console.log("listening in port 3000"));
app.use(express.static('public'));
app.use(express.json());

const database = new Datastore('database.db');
database.loadDatabase();

app.get('/api', (request, response)=>{
  database.find({}, (err, data)=>{
    if (err){
      response.end();
      return;
    }
    response.json(data);
  })
})
app.post('/api', (request, response)=>{
  console.log(request.body);
  const data = request.body;
  database.insert(data);
  response.json({
    status: 'success',
    login : data.log,
    created : data.create

  });
});
