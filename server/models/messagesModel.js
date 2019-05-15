const db = require('../config/connection');

module.exports = {

  readMessages() {
    return db.many(`
      SELECT *
        FROM messages;
    `);
  },

  createMessage(message) {
    console.log('messagesModel >>> reached models', message);
    return db.one(`
      INSERT INTO messages (firstName, lastName, email, body)
           VALUES ($/firstName/, $/lastName/, $/email/, $/body/)
        RETURNING *;
    `, message);
  }

}