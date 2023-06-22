import axios from "axios";
import Config from "../config";

export const weatherApi = axios.create({ baseURL: Config.baseUrl });
