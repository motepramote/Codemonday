const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", require("./router/api_auth"));

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}'`);
});
