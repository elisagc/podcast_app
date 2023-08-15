import axios from "axios";

const baseURL = "https://itunes.apple.com/";

const api = axios.create({ baseURL });

export default api;
