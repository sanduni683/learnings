console.log("Runing")

const axios = require("axios")

const getApi = axios.get('http://localhost:9000/user')

getApi.then((response) => {
    console.log("Promise is resolved " + JSON.stringify(response.data))
}).catch((err) => {
    console.log("Promise is rejected " + err)
})