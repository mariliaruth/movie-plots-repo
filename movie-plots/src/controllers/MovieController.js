import MovieService from "../services/MovieService.js";
import { formatMovieObject } from "../utils/helpers.js";
class MovieController{
  static async getMoviePlot(req,res){
    const movieName = req.query.movie;
    try {
      console.log("Iniciando busca pelo plot do filme:", movieName);
      // trazer apenas o plot para teste
      const moviePlot = await MovieService.getMovieInfo(movieName);
      console.log("Plot do filme obtido:", moviePlot);
    
      const response = formatMovieObject(moviePlot);
      console.log("Objeto formatado:", response);
    
      // aqui vai o plot traduzido
      const translatedPlot = await MovieService.getTranslation(response);
      console.log("Plot traduzido:", translatedPlot);
    
      res.status(200).json(translatedPlot);
    } catch (error) {
      console.error("Erro ocorrido:", error);
      res.status(500).json({ message: error.message });
    }
  }
}
export default MovieController;