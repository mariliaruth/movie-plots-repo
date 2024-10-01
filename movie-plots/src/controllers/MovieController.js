import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/helpers.js";
class MovieController{
  static async getMoviePlot(req,res){
    const movieName = req.query.movie;
    try{
      //trazer apenas o plot para teste
      const moviePlot= await MovieService.getMovieInfo(movieName);
      const response= formatMovieObject(moviePlot);
      //aqui vai o plot traduzido
      const translatedPlot= await MovieService.getTranslation(response);
      res.status(200).json(translatedPlot);
    }catch (error){
      console.error(error);
      res.status(500).json({ message: error.message});
    }
  }
}
export default MovieController;