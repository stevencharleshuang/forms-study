const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

const logger = require('morgan');
const bodyParser = require('body-parser');

const messagesRouter = require('./routes/messagesRouter');

// Utilities
app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.get('/', (req, res) => res.json({ message: 'Reached the form server root' }));
app.use('/api', messagesRouter);

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(`I'm sorry, Dave. I'm afraid I can't do that.`);
  res.status(500).send(`I'm sorry, Dave. I'm afraid I can't do that.`);
});

app.listen(PORT, () => console.log(`Server up and running! Port: ${PORT} Env: ${app.get('env')}`));

