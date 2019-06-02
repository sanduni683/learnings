import React,{ Component , Fragment} from 'react';
import Auxiliary from './Auxiliary'
import WithClassComponent from './WithClassComponent'
import '../../containers/App.css'
import withClassFunction from './withClassFunction'

class ComponentsFragment extends Component {
    render() {
        console.log('rendering')
        /*
        return [
            //wrapping elemets in array without root div.
            //should have a unique key for this and array of elements
            //using wrapping components can do the same thing
           // <div className="Person">
                <h3 key="h3">Checking ComponentsFragment</h3>,
                <p key="p1">Type Something , but nothing will happen!</p>,
                <input type="text" key="inpu1" value="Type Something" />,
                <button key="btn1">Delete me</button>
           // </div>
        ];
        */
        
        /*
         For warpping can use either 
            1) <React.Fragment> .....  </React.Fragment> 
            2) <Fragment> .....  </Fragment>   after import {Fragment}
            3) <Auxiliary> ..... </Auxiliary>  after import 'Auxiliary'
            4) <WithClass> ..... </WithClass>  after import 'WithClass'

        */
        return(
           // <WithClass cssClass={"App"}>
         <Auxiliary> 
                <h3>Checking ComponentsFragment</h3>
                <p>Type Something , but nothing will happen!</p>
                <input type="text" value="Type Something" />
                <button>Delete me</button>
        </Auxiliary>
          //  </WithClass>
        )
    }
}
export default withClassFunction(ComponentsFragment , "App" );