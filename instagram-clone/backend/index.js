const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.get("/posts", (request, response) => {
  let posts = [
    {
      caption: "Golden Gate Bridge",
      location: "San Francisco",
    },
    {
      caption: "London Eye",
      location: "London",
    },
  ];
  response.send(posts);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
