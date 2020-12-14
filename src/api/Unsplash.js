import axios from "axios";

//Allows you to have a configuration file for an API request
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: process.env.REACT_APP_API_KEY,
  },
});

