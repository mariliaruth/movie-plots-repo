import "dotenv/config";
import express from "express";
import routes from "./src/routes/index.js";


const PORT =6100;

const app= express();

app.use(express.json());

routes(app);

app.listen(PORT, ()=>{
  console.log("servidor escutando na porta: 6100");
})