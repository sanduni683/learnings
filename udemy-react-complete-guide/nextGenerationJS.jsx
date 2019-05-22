//let,const variables
let myName = "Sanduni"
console.log( myName )
console.log( myName = "Max" )
const myAge = 28
console.log( myAge )
//console.log(myAge =90) ==> cannot change const value

//Arrow Functions
function print( name )
{
    console.log( name )
}
print( 'Sanduni' )

const show = ( age ) =>
{
    console.log( age )
}
show( 'Dimu' )

//removing(omit) paranthasis of function cuz, only one argument,
//removing(omit) return keyword and line cuz, only one return statement
const multiply = number => number * 2;

console.log( multiply( 2 ) )

//===================================================================================================================
//class inheritance - Es5 syntax
class Human
{
    constructor()
    {
        this.gender = 'Male'
    }
}

class Person extends Human
{
    constructor()
    {
        super()
        this.name = 'max';
        this.gender = 'Female'
    }

    myDeatils()
    {
        console.log( this.name + " " + this.gender );
    }
}
const p = new Person();
p.myDeatils();

//class inheritance - Es6 syntax
class Human
{
    gender = 'Male'
}

class Person extends Human
{
    name = 'max'
    gender = 'Female'
}

myDeatils = () =>
{
    console.log( this.name + " " + this.gender )
}

const p2 = new Person();
p2.myDeatils();

//===================================================================================================================
//... operator as spread and rest both
const num = [ 1, 2, 3 ];
const newNum = [ ...num, 4 ];
console.log( newNum );

// ... spread operator
const person = {
    name: 'max'
};
const newPerson = {
    ...person,
    age: 28
}
console.log( newPerson )

// ... rest operator
const filter = ( ...args ) => args.filter( el => el === 1 )
console.log( filter( 1, 2, 1, 3 ) )

//========================================================================================================================
//array destrustoring object destrustoring
const numbers = [ 1, 2, 3 ];
[ num1, , num3 ] = numbers;
console.log( num1, num3 )

//refreshing array functons
const values = [ 1, 2, 3 ];
const doubleVal = values.map(( val ) => { return val * 2; } )
console.log( values )
console.log( doubleVal )

