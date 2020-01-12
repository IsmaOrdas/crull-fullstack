const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const booksRouter = require('./routers/books');
const usersRouter = require('./routers/users');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(booksRouter);
app.use(usersRouter);

app.listen(port, () => {
  console.log('Server is up.', port)
})