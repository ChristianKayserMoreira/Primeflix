import axios from "axios";

// Base da Url https://api.themoviedb.org/3/
// URL da API movie/now_playing?api_key=f5fef30c67c9ca256e6c01651060c42e&language=pt-BR

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;
