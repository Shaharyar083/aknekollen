import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

axios.defaults.headers.authorization = cookies.get('akneadmintoken');
// console.log("cookies token", cookies.get('leeadmintoken'))
const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept",
    crossorigin: true,
});

export const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
export default instance;
