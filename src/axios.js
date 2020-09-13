import axios from "axios";

const instance = axios.create({
  //baseURL: "http://localhost:5001/challenge-b1910/us-central1/api",
  baseURL: "https://us-central1-challenge-b1910.cloudfunctions.net/api",
});

export default instance;
