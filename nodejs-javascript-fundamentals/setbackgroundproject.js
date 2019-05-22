var set = document.getElementById('set')
let modify = document.getElementById('modify')
var elements = document.getElementsByName('cssProperty')
console.log(elements) // --> NodeList(3) [select#Background, select#width, select#height]

function setFun() {

    for (var index = 0; index < elements.length; index++) {
        let key = elements[index].getAttribute('id')
        console.log(key)

        let value = elements[index].value
        console.log(value)

        modify.style[key] = value;
    }
}
set.addEventListener('click', setFun)