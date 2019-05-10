//javaScript can be run on backend servers using nodeJS
//node filename
//with nodeJS window object and document object are not available. Instead of that global object is available.

//import fs module using 'require' 

const fs = require('fs')
const fsp = require('fs').promises
//const fetch = require('fetch').promises
const fetch = require("node-fetch")

console.log("Runing")
//console.log(document) //this document object not available
console.log(global)

setTimeout(() => {
    console.log('Done')
}, 1)

fs.readFile('info.txt', (err, data) => {
    console.log(err)
    console.log(data)
})

console.log("test1")

//this looks like going to a callback hell, to avoid callback hell promices are introduced.
fs.readFile('info.txt', { encoding: 'utf-8' }, (err, data) => {
    console.log(data)
    if (data == "1") {
        fs.readFile('info2.txt', { encoding: 'utf-8' }, (err, data) => {
            console.log("Content of file 2 " + data)
        })
    }
    else {
        console.log("Your data value does not equal to value 1")
    }
})

var readFilePromise = fsp.readFile('inf.txt', { encoding: 'utf-8' })

console.log(readFilePromise)


readFilePromise.then((data) => {
    console.log("Promise is resolved " + data)
    console.log(readFilePromise)
}).catch((err) => {
    console.log("Promise is rejected " + err)
    console.log(readFilePromise)
})

//promises has 3 states ,pending,rejected,resolved

fetch('localhost:9000/user')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(err)
    })