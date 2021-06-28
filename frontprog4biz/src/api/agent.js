import axios, {
    AxiosResponse
} from "axios";

const baseUrl = "https://localhost:5001/api/"
const responseBody = (response) => response.data;

const requests = {
    get: (url, queryParams) => axios.get(url,{
        params: queryParams
    }).then(responseBody),
    post: (url, body) => axios.post(url, body).catch(function (error){
        if(error.response)
            return false;
        else
            return true;
    }),
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
    getAll: (pageSize,pageNumber) => requests.get(baseUrl + "person",{
        itemsPerPage:pageSize ?? 10,
        pageNumber
    }),
    createPerson: (person) => {
       let promise =requests.post(baseUrl + "person",person)
       return promise;
    }
}

export default {
    Person
};