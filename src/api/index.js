import axios from "axios";

const httpClient = axios.create({
  baseURL: 'http://localhost:5000'
});

export const getSuperheroAll = async () => {
  const response = await httpClient.get('/superhero/all');
  return response;
}