const messagesRouter = require('express').Router();
const messagesController = require('../controllers/messagesController');
const messagesResponseController = require('../controllers/messagesResponseController');

messagesRouter.route('/messages')
.post(messagesController.addMessage, messagesResponseController.handleCreateMessage)
.get(messagesController.getMessages, messagesResponseController.handleReadMessages);

messagesRouter.get('/', (req, res, next) => {
  res.send({ message: 'You hit the messages router, Dave' });
});

module.exports = messagesRouter;