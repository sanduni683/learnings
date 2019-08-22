import React from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Styles from './Layout.module.css'
//require('./App.css');

const layout = (props) => {
    return (
        <Auxiliary>
            <div> Toolbar, SideDrawer, Backdrop </div>
            <main className={Styles.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;