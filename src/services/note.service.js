import http from "../http-common"
console.log(http);

class NoteDataService {
    
  getAll() {
    return http.get("/");
  }

  create(data) {
    return http.post("/", data);
  }

  delete(id) {
    return http.delete(`/delete/${id}`);
  }
}

export default new NoteDataService();