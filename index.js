const express = require("express");
const app = express();
const port = 3000;
const url = require("./controller/url.js");

app.use(express.json());
app.set("json spaces", 2);
app.use("/", url);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
