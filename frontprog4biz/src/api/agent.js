import axios, {
    AxiosResponse
} from "axios";

const baseUrl = "https://localhost:5001/api/"
const responseBody = (response) => response.data;

const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody),
    // postForm: (url, file) => {
    //   let formData = new FormData();
    //   formData.append("File", file);
    //   return axios
    //     .post(url, formData, {
    //       headers: { "Content-type": "multipart/form-data" },
    //     })
    //     .then(responseBody);
    // },
};

const Person = {
    getAll: () => requests.get(baseUrl + "person"),
    createPerson: (person) => {
       return  requests.post(baseUrl + "person",person);
    }
}

export default {
    Person
};