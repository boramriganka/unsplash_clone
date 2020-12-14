import axios from "axios";

//Allows you to have a configuration file for an API request
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID T7mBgHLfHLVrdT8OTyypfE3AAhGjvdt0G_rfbDqpjiI",
  },
});

