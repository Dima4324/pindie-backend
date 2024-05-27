const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors')
const path = require('path');
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/apiRouter")
const pagesRouter = require("./routes/pages");

const connectToDatabase = require('./database/connect');
// const cors = require("./middlewares/cors");

const app = express();
const PORT = 3001;

connectToDatabase();

app.use(
  cors({
    origin: [
      'https://practicum.yandex.ru',
      'https://students-projects.ru',
      'http://localhost:3000',
      'http://localhost:3001',
      "https://pindie-practicum.nomoredomainswork.ru"
    ],
  }),
  cookieParser(),
  bodyParser.json(),
  pagesRouter,
  apiRouter,
  express.static(path.join(__dirname, "public"))
);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});