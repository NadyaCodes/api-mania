import bodyParser from "body-parser";
import express from "express";
const port = 3002;
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  console.log(`URL: ${request.url}`);
  response.send({message: "Node.js and Express REST API"});
});


const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});


// import { createServer } from "http";
// const port = 3001;
// const server = createServer();

// server.on("request", (request, response) => {
//   console.log(`URL: ${request.url}`);
//   response.end("Hello, server!");
// });

// server.listen(port, (error) => {
//   if (error) return console.log(`Error: ${error}`);
//   console.log(`Server is listening on port ${port}`);
// });