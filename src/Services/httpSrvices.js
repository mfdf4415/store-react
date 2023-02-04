import axios from "axios";

axios.defaults.baseURL = "https://api.escuelajs.co/api/v1"

// axios.interceptors.response.use(res => {
//     console.log(res.data)
// }, error => {
//     console.error(error)
// })

const http = {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    put: axios.put
}

export default http