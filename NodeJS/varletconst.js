//====================how var works===========================================================================================

//The value 10 comes outside the for loop's scope, which means the variable 'index' is available anywhere in the function.
var len = 10
for (var index = 0; index < len; index++) {
    console.log(index)
}
console.log(index)
console.log(index)
//This time the output is similar, but 9 is repeated because the block code does not execute the 10th time
for (var index2 = 0; index2 < len; index2++) {
    var inside = index2;
    console.log(inside)
}
console.log(inside)

var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list.forEach(function (value, index, src) {
    console.log(value)
})
//value was declared as part of the forEach callback function, not part of a block within a function.
//So its scope is limited to the forEach function.
//console.log(value) //this gives error --> value is not defined

var value = "foo",
    list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list.forEach(function (value, index, src) {
    console.log(value)
})
console.log(value) //value is clearly two different variables, despite sharing the same name. Their scope is different.



//====================how let works===========================================================================================
//Let variables are limited to the scope of their containing block,
//which means they cannot be hoisted.
//It does not mean they cannot be accessed by a child block.
let length = 10
for (let ind = 0; ind < length; ind++) {
    console.log(ind)
}
//This time we get the index value as the loop executes. But accessing index outside of the for loop throws an exception:
//console.log(ind) //this gives not defined exception
for (let ind2 = 0; ind2 < length; ind2++) {
    let inside2 = ind2;
    console.log(inside2)
}
//The variable inside2 is declared within the for loop
//If it were declared using var the final console.log would have echoed 9 instead of throwing a ReferenceError exception.
//console.log(inside2)
let value3 = "foo",
    list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
list3.forEach(function (value3, index, src) {
    console.log(value3)
})
console.log(value3)

let word = "foo",
    list4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

list4.forEach(function (value, index, src) {

    word = word + value;
    console.log(value);

});

console.log(word);

//====================how const works===========================================================================================
//const scopes the same as let. The difference is one a const value is set it cannot be changed.
//This time we get the initial value, 0, but as soon as the for loop attempts to change the value an exception is thrown:
/*
const num = 10;
for (const a = 0; a < num; a++) {
    console.log(a); //TypeError: Assignment to constant variable.
}
console.log(a);
*/

//The scope of valueString does not pass through to the forEach callback function.
//Instead the valueString parameter is a different variable, just like using var.
const valueString = "foo",
    listNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listNumbers.forEach(function (value, index, src) {
    console.log(value)
})
console.log(valueString)

/* this gives Assignment exception , cannot changge the value of const
const valueStr = "foo",
    listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listNum.forEach(function (value, index, src) {
    valueStr = valueStr + value
    console.log(value)
})
console.log(valueStr)
*/

const listNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listNumb.forEach(function (value, index, src) {
    const innerValue = "Foo - " + value
    console.log(innerValue)
})

//The const declaration sets an immutable(unchangeble, fixed) reference to a value, which I assume is similar to a pointer.
//When setting a const variable to an object you are still free to modify their properties.
//This is true unless those properties are declared as a const variable.

const insideValue = { "foo": "BOo" },
    listN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

listN.forEach(function (value, index, src) {
    insideValue.foo = insideValue.foo + value
    console.log(value)
})
console.log(insideValue)

//similar example to above- const object value change(function(){
function display() {
    const obj = { a: 1, b: 2, c: 3 }
    const obj = Object.freeze({ a: 1, b: 2, c: 3 })

    //obj = {x:7 , y:8, z: 9}
    //This is good
    //TypeError: Assignment to constant variable.

    obj.a = 7; obj.b = 8; obj.c = 9
    console.log(obj); //outputs: {a: 7, b: 8, c: 9}
    //after Object.freeze this outputs { a: 1, b: 2, c: 3 }
};
display()

// const actually creates immutable binding instead of making the variables immutable.
// we can get immutable feature with Object by using Object.freeze