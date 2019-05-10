//if-else condition
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}

//querySelector
var myHeading = document.querySelector("h1");
alert(myHeading);
myHeading.textContent = 'Hello world!';
alert(myHeading);

function multiply(num1, num2) {
    var result = num1 * num2;
    alert(result);
}

console.log('String', 12.234, null, true);

multiply(4, 3);

document.querySelector('h1').onclick = function () {
    alert('Awch, Stop poking me..');
}

function showAlert() {
    alert("Page is idle");
}

window.setTimeout(showAlert, 5000);

var car = {
    color: "RED",
    name: "Toyota",
    speed: 200,
    engine: {
        size: 34,
        make: "fg",
        pistons: [{ maker: 'bmw' }, { maker: 'bmw' }, { maker: 'bmw' }]
    },
    drive: function () { return "drive"; }

};

var shoppingList = [
    "Apple",
    "Banan",
    "Garape"
];

var arrayList = ["String", 234, { car: "ford" }, ["maker", "Make", 345]];

delete car.color;

arrayList.shift(); // delete first array element
arrayList.unshift("Orange", "Avacado"); // adding elements from the begining

arrayList.pop(); // delete last array element
arrayList.push("Kiwi", "Papaya"); // adding elements from the last

arrayList.splice(2, 1); //for arrayList starting from 2 deletes 1 element
arrayList.splice(4, 0, "Guava"); //for arrayList starting from 4 deletes 0 element and add element "Guava"
arrayList.splice(5, 1, "Onion"); //for arrayList startig from 5 deletes 1 element and replacce that element with the new value of "Onion"

function displayName() {
    var name = "Sanduni Nilanka";

    function concat(name) {
        return "Mrs " + name
    }

    return concat(name);
}
function displayFullName(fullname) {
    return fullname.FirstName + fullname.LastName;
}
console.log(
    displayFullName({ FirstName: "Dimuthu", LastName: "Darshana" })
);

function name(fullname) {
    //invoke particular callable object - anonymous function()
    return fullname(); //here fullname() executing anonymous function to get the return value "Embeded"
}
console.log(name(function () { return "Embeded" }))

console.log(myName + returnname())
var myName = "HADFGH"
function returnname() { return "John legend " }

//?????? Memory hosting variable and function act differently.
console.log(value1 + display())
var value1 = "Apple"
function display() {
    return "Eating"
}

console.log(val1 + display())
var val1 = "Apple"
function display() {

    console.log(val2 + action()) // this prints two times in the console , check it out.
    var val2 = "Amma"
    function action() {
        return "Cooking"  //this is the most up lifted memory
    }

    return "Eating"
}

var engine = {
    maker: "Mazda",
    HaedGasKit: {
        pots: [
            "Piston1",
            "Piston2",
            "Piston3"
        ]
    },
    capacity: 220
}
function runExpression() {
    var a = 10
    function add() {
        //var engine = 1
        var b = 90
        //return a + b
        console.log(engine)
    }
    add()
}

var obj = {
    prop: this,
    method: function () { return this; }
}
var obj2 = {
    prop: this,
    method: {
        embed: "Embeded",
        method2: function () { return this; }
    }
}
var array = [
    this,
    function () { return this; }
]
function global() { return this; }
global.call(obj) // we can call callable functions this way too , with call kwyword we can send arguments to functions.and its gonna change this value of inside of the function
new global(); //this is assining a new object to previous declared global function.

//there are 3 ways to invoke a method
//1)usual way --> global();
//2)with call keyword  --> global.call(obj)
//3)with new keyword --> new global();

//this is new function Object Apple, the way JS initialize a Object
function Vehicle(x, y, z, l) {
    this.number = x
    this.letter = y
    this.size = z
    this.color = l

}
//initializing new instances of Apple object
var vehicle1 = new Vehicle(10, "h", 78, "red")
var vehicle2 = new Vehicle(20, "l", 68, "white")
var vehicle3 = new Vehicle(30, "m", 58, "red")
var vehicle4 = new Vehicle(40, "n", 48, "green")

function Apple(col, wei) {
    this.color = col
    this.weight = wei
}
Apple.prototype = {
    eat: function () { return "Eat the Apple"; },
    throww: function () { return this; }
}
//initializing new instances of Apple object
var apple1 = new Apple("Red", 150)
var apple2 = new Apple("Green", 160)
var apple3 = new Apple("Pink", 165)

apple2.eat = function () { return "Eating the 2nd apple"; }

//Loop in JS ========================================================================

const arr = [1, 2, 3];
//sequential loop
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);  // loop through for loop
}
arr.forEach(console.log); //loop through forEach
arr.map(console.log);  //loop through -map
for (const num of arr) {
    console.log(num); //loop through for-of
}
//Objects loop through for-in
var obj = { "a": 1, "b": 2, "c": 3 };
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety..
        alert("prop: " + prop + " value: " + obj[prop])
    }
}