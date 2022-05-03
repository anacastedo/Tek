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
    };
    response.json(data);
  });
});


app.post('/api', (request, response) => {
  const data = request.body;

  database.find({log: `${data.log}`}, function(err, docs) {
    if (docs.length !== 'undefined') {
      if (docs.length === 0) {
        database.insert(data);
      } else {
        if (data.log === docs[0].log) {
          console.log('Profile Already Exists');
        } else {
          database.insert(data);
          console.log("Success!");
        };
      };
    } else {
      console.log('Non Existing Profile');
    };
  });
});

app.post('/compare1', (request, response) => {
  const data = request.body;
  database.find({log: `${data.username1}`}, function(err, docs) {
    response.json(docs);
  });
});

app.post('/compare2', (request, response) => {
  const data = request.body;
  database.find({log: `${data.username2}`}, function(err, docs) {
    response.json(docs);
  });
});

app.post('/api_remove', (request, response) => {
  const data = request.body;
  let apagar = console.log(JSON.stringify(data.log));
  database.remove({log: request.body.log}, {}, function(err, numRemoved) {});
});
