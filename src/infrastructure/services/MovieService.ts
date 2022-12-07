import { api } from "../http/Api";
import { AxiosPromise } from "axios";

interface IMovieHttpRepository {
  list: () => Promise<AxiosPromise>;
}

const MovieHttpService: IMovieHttpRepository = {
  list: () => api.get(`/products`),
};

export default MovieHttpService;
