import express from "express";
import MovieController from "../controllers/MovieController.js";

const routes = (app) =>{
  app.route("/").get((req,res) => res.status(200).send("Servidor no AR"));
  app.use(express.json());
  app.get("/movie/search", MovieController.getMoviePlot);
  //teste servidor
  app.get('/ping', (req, res) => {
    res.send('pong');
  });
};

export default routes; 