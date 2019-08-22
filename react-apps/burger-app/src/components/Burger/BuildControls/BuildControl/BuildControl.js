import React from 'react'
import Styles from './BuildControl.module.css'

//reusbale div component with labels and buttons
const buildControl =(props) => (
    <div className={Styles.BuildControl}>
        <div className={Styles.Label}>{props.ingredientLabel}</div>
        <button className={Styles.Less} onClick={props.removeIngre} disabled={props.disableButton}>Less</button>
        <button className={Styles.More} onClick={props.addIngre} >More</button>
    </div>
);

export default buildControl;