var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.json(data);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('inside msg post controller', req.body);
      var messages = [req.body.message, req.body.username, req.body.roomname];
      models.messages.post(messages, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    } // a function which handles posting a message to the database
  }, 

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('inside users get controller');
      models.users.get((err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.json(data); 
        }
      });
      //res.json(req.body);
    },
    post: function (req, res) {
      //console.log('inside users post controller');
      var username = [req.body.username];
      models.users.post(username, (err, data) => {
        if (err) {
          console.error(err);
        } else {
          res.sendStatus(201); 
          res.end();
        }
      });
    }
  }
};

