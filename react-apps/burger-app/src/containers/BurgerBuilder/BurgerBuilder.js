import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    meat : 1 ,
    salad: 0.5,
    cheese: 0.5,
    bacon: 0.8 
}

class BurgerBuilder extends Component {

    state= {
        ingredients: {
            meat : 0 ,
            salad: 0,
            cheese: 0,
            bacon: 0 
        },
        totalPrice : 4
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type] //access given type ingredient value
        const updatedCount = oldCount + 1 
        const updatedIngredients = {
            ...this.state.ingredients 
        }
        updatedIngredients[type] = updatedCount

        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice + priceAddition

        this.setState({ingredients : updatedIngredients , totalPrice : updatedPrice})
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        //to prevent the error throwing here for array size smaller than 1 array element
        if (oldCount <= 0 ){
            return; //nothing happens if we try to reduce an ingredient which we don't have
        }
        const updatedCount = oldCount - 1

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount

        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const updatedPrice = oldPrice - priceDeduction
    
        this.setState({ingredients: updatedIngredients , totalPrice: updatedPrice})
    }

    render(){

        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            //disabledInfo[key]          ===> 0, 1, 0, 3
            //disabledInfo[key] <= 0     ===> checks smaller than 0 and return true or false
            disabledInfo[key] = disabledInfo[key] <= 0 // set disabledInfo[key] to true or false
        }

        return(
            <Auxiliary>
                <div><Burger ingredients={this.state.ingredients}/></div>
                <div><BuildControls
                     addIngredients={this.addIngredientsHandler}
                     removeIngredients={this.removeIngredientsHandler}
                     disableButton={disabledInfo} 
                     price={this.state.totalPrice}/>
                </div>    
                      
            </Auxiliary>
        );
    }
}
export default BurgerBuilder;