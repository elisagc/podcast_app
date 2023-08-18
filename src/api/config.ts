import axios from "axios";

var corsURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = "https://itunes.apple.com/";

const api = axios.create({ baseURL: corsURL + baseURL });

export default api;
