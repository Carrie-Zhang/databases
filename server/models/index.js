var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //var queryString = 'select m.Content, u.username, m.roomname from messages m inner join users u on (m.user_id = u.id)';
      var queryString = 'SELECT * FROM messages';
      db.connection.query(queryString, function(err, data) {
        if (err) { callback(err, null); }
        callback(null, data);
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      body.message = JSON.stringify(body.message);
      
      var values = [body.message, body.username, body.roomname];
      var queryString = 'INSERT INTO messages (Content, user_id, roomname) VALUES (?, (select id from users where username=?), ?);';
      db.connection.query(queryString, values, function(err, data) {
        if (err) { callback(err, null); }
        callback(null, data);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.connection.query('SELECT * FROM messages', function(err, data) {
        if (err) { callback(err, null); }
        callback(null, data);
      });
    },
    post: function (username, callback) {
      var queryString = 'INSERT INTO users (username) VALUES (?)';
      db.connection.query(queryString, username, function(err, result) {
        if (err) { callback(err, null); }
        callback(null, result);
      });
    }
  }
};

