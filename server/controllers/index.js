var models = require('../models');
var app = require('express');

// //console.log(app);
// app.get('/', function (req, res) {
//   res.send('hello world');
// });

module.exports = {
  messages: {
    get: function (req, res) {
      
      res.send(models.messages.get());
      console.log('---------------->', req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      console.log('inside msg post controller', req.body);
      models.messages.post();
      res.json(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside users get controller');
      models.users.get();
      //res.json(req.body);
    },
    post: function (req, res) {
      console.log('inside users post controller');
      models.users.post();
      res.json(req.body);
    }
  }
};

