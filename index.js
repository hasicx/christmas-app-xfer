const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 8000;

app.use(morgan("combined"));

app.get("/", (req, res) => {
  const today = new Date();
  const christmas = Date.parse("2019-12-24")
  const delta = christmas - today
  res.send(`Christmas is coming in ${Math.ceil(delta / (1000*60*60*24))} days. 🎅`);
});

app.listen(port, () => console.log(`Christmas is comping on ${port}!`));
