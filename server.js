const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello form the server",
  });
});

const port = 8080;

app.listen(port, () => {
  console.log(`Server is listen on port ${port}`);
});
