var db = require('../db');

module.exports = {
  messages: {
    get: function (someparameters) {
      console.log('------------------------->test');
      db.connection.query('SELECT * FROM messages', function(err, rows) {
        //console.log('--------->hi');
        if (err) { return done(err); }
        done(null, rows);
      });
    }, // a function which produces all the messages
    post: function () {
      db.connection.query('INSERT INTO messages (Content, user_id, room_id) VALUES (\'Awesome\', 2, 2)'), values, function(err, result) {
        if (err) { return done(err); }
        console.log('##########');
        done(null, result.insertId);
      };
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.connection.query('SELECT * FROM messages', function(err, rows) {
        console.log('--------->hi');
        if (err) { return done(err); }
        done(null, rows);
      });
    },
    post: function () {
      db.connection.query('INSERT INTO users (username) VALUES (\'rith\');'), values, function(err, result) {
        if (err) { return done(err); }
        console.log('inside of users post models ##########');
        done(null, result.insertId);
      };
    }
  }
};

