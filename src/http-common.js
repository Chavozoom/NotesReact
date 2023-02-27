import axios from "axios";

export default axios.create({
  baseURL: 'https://notes-api-sdvk.onrender.com/note',
  headers: {
    'Content-Type': "application/json"
  }
});