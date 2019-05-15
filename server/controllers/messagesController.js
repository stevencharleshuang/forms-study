const messagesModel = require('../models/messagesModel');

module.exports = {
  async getMessages(req, res, next) {
    try {
      res.locals.messages = await messagesModel.readMessages();
      next();
    } catch(err) {
      next(err);
    }
  },

  async addMessage(req, res, next) {
    try {
      res.locals.message = await messagesModel.createMessage(req.body);
      next();
    } catch(err) {
      next(err);
    }
  }
}