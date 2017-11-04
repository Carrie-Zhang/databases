var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      var queryString = 'select m.Content, u.username, m.roomname from messages m inner join users u on (m.user_id = u.id)';
      // var queryString = 'SELECT * FROM messages';
      db.query(queryString, [], function(err, data) {
        if (err) {
          callback(err, null); 
        } else {
          callback(null, data); 
        }
      });
    }, // a function which produces all the messages
    post: function (messages, callback) {
      //messages.message = JSON.stringify(messages.message);
      //var values = [body.message, body.username, body.roomname];
      var queryString = 'INSERT INTO messages (Content, user_id, roomname) VALUE (?, (select id from users where username=?), ?)';
      db.query(queryString, messages, function(err, data) {

        callback(err, data);

      });
      db.query('select * from messages', [], function(err, data) {
        if (err) {
          callback(err, null); 
        } else {
          console.log('INSIDE MODELS POST MESSAGES', data); 
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT * FROM users', [], function(err, data) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    },
    post: function (username, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.query(queryString, username, function(err, result) {
        if (err) {
          callback(err, null);
        } else {
          callback(null, result);
        }
      });
    }
  }
};

