var models = require('../models');
var app = require('express');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(data => {
        if (err) { console.error(err); }
        res.json(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('inside msg post controller', req.body);
      models.messages.post(req.body, (err, data) => {
        if (err) {
          console.error(err);
        }
        res.sendStatus(201);
      });
    } // a function which handles posting a message to the database
  }, 

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside users get controller');
      models.users.get((err, data) => {
        if (err) { console.error(err); }
        res.json(data);
      });
      //res.json(req.body);
    },
    post: function (req, res) {
      console.log('inside users post controller');
      var username = [req.body.username];
      models.users.post(username, (err, data) => {
        if (err) { console.error(err); }
        res.sendStatus(201);
      });
    }
  }
};

