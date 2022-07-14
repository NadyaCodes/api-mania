import { request } from "express"
import fs from 'fs'
import axios from "axios"

const userData = fs.readFileSync("data/users.json", 'utf-8')
const users = JSON.parse(userData)

const quoteData = fs.readFileSync("data/quotes.json", 'utf-8')
const quotes = JSON.parse(quoteData)

const catFactsResponse = await axios.get("https://cat-fact.herokuapp.com/facts")
const catFacts = catFactsResponse.data;

const satellitePicResponse = await axios.get("https://api.nasa.gov/planetary/apod?api_key=34vrP3yewNAFBUbwWjaIFkOc8R7IKAzCtPMo28Vx")
const satellitePic = satellitePicResponse.data;

const xkcdResponse = await axios.get("https://xkcd.com/info.0.json");
const xkcd = xkcdResponse.data;

const randomFoxResponse = await axios.get("https://randomfox.ca/floof/");
const randomFox = randomFoxResponse.data;

const router = (app) => {

  app.get("/", (request, response) => {
    response.send({
      message: "Node.js and Express REST API"
    });
  });

  app.get("/users", (request, response) => {
    response.send(users);
  });

  app.get("/quotes", (request, response) => {
    response.send(quotes);
  });

  app.get("/cat-facts", (request, response) => {
    response.send(catFacts)
  })

  app.get("/satellite-pic", (request, response) => {
    response.send(satellitePic)
  })

  app.get("/xkcd", (request, response) => {
    response.send(xkcd)
  })

  app.get("/fox", (request, response) => {
    response.send(randomFox)
  })
  
};

export default router;