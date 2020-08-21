import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.API_URL + "/authors/";
const baseUrl = "http://localhost:3001/authors"; // working

export function getAuthors() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
