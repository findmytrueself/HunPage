const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("GET Success");
});

app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});
