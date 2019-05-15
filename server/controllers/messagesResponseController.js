module.exports = {

  handleReadMessages(req, res) {
    res.json(res.locals.messages)
  },

  handleCreateMessage(req, res) {
    res.json({ message: res.locals.message });
  },

  handleError(err, req, res, next) {
    console.log(err);
    res.status(404).send(`I'm afraid I can't do that, Dave.`);
  }

}