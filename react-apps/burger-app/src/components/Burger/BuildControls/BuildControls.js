import React from 'react'
import Styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls =[
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Chesse', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]
    


const buildControls = (props) => (
    <div className={Styles.BuildControls}>
        <p >Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
        {/*loop through label(using controls variable) otherwise hardcord here,and calling reusable BuildControl Component */}
        {controls.map(ctrl =>(
            <BuildControl  
                key={ctrl.label} 
                ingredientLabel={ctrl.label}
                addIngre={() => props.addIngredients(ctrl.type)}
                removeIngre={() => props.removeIngredients(ctrl.type)}
                disableButton={props.disableButton[ctrl.type]} />
        ))}
    </div>
);

export default buildControls; 