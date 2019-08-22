import React from 'react'
import Styles from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger= (props) => {
    console.log(props.ingredients)
     {/* extracts the keys of given object and turns that into an array, this gives an array of the keys,& not values*/}
    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {
            console.log([ingredientKey]) //prints key of each array element
            console.log(props.ingredients[ingredientKey]) //prints the value of given key element 
            //(ex: Object{name: 'dimu', age:'30' ==>  
            //     Object.name gives us dimu 
            //     Object['age'] gives us 30 })
            console.log(...Array(props.ingredients[ingredientKey])) //make a array which suites with value(size of value)
            return [...Array(props.ingredients[ingredientKey])] //gives us array with our value,only purpose here to get value times(*value) ex: meat 1 times, salad 2 times ....
                .map((e,index) => {
                   return <BurgerIngredient key={ingredientKey + index} type={ingredientKey} /> //here unique key=meat+0 , salad+1 ...... type=meat , salad , ........
                })
         })
         .reduce((prevValue, currentValue) => { //reduce array function transforms an array into something else.
             return prevValue.concat(currentValue) //updated values, which finally return with initial value and loop through all values.
         }, [] );

        console.log(transformedIngredients.length)
         if (transformedIngredients.length === 0) {
             transformedIngredients = <p>Please start adding ingredients.. !</p>
         }
        
   
    return (
        <div className={Styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}       
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;