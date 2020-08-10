import axios from "axios";

export const getToken = () =>
  axios.get(`${process.env.REACT_APP_BASE_API_URL}oauth2/token/`, {});
