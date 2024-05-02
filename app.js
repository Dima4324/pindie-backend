const express = require("express");
const bodyParser = require("body-parser")
const cors = require("./middlewares/cors");
const app = express();
const PORT = 3000;

app.use(cors(), bodyParser.json())

app.listen(PORT, () => {
    console.log(`Server is running at PORT http://localhost:${PORT}`);
});