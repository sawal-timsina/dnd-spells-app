import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
  responseType: "json",
});

export { Axios };
