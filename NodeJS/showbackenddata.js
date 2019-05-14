console.log("Runing")


const getApi1 = axios.get({
    url: 'http://localhost:9000/user',
    headers: { "Access-Control-Allow-Origin": "*" }
})

getApi1.then((response) => {
    console.log("Promise is resolved " + JSON.stringify(response.data))
}).catch((err) => {
    console.log("Promise is rejected " + err)
})