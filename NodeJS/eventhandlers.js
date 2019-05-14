var select = document.getElementsByName('cars')[0]

//in-line callback events
select.onclick = function (event) {
    console.log(event)
}

//not anonymous function --> function name 'callBack'
function callBack() {
    console.log("this is the callBack functon")
}

//multiple events can use without using 'on' to the same method names.(here onclick as click)
//for anonymous functions cannot apply removeEventListner
//anonymous function --> function name ' no name '
select.addEventListener('click', function (event) {
    console.log("this is caled by add event listner 1" + event)
})
select.addEventListener('click', function (event) {
    console.log("this is caled by add event listner 2" + event)
})

// add EventListener
select.addEventListener('mouseover', callBack)
//remove EventListener -- to remove EventListener we need function name , for anonymous function like above we cannot implement this
select.removeEventListener('mouseup', callBack)