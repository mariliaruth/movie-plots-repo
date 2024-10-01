import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";


const PORT =3001;

const app= express();

app.use(express.json());

routes(app);

app.listen(PORT, ()=>{
  console.log("servidor escutando");
})