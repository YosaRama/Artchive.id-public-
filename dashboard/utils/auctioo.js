import axios from "axios";

const auctioo = axios.create({
  baseURL: process.env.AUCTIOO_URL,
  timeout: 40000,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export default auctioo;
