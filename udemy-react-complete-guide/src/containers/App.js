import React, { Component } from 'react';
import ClassBasedComponent from '../components/ComponentsBasic/ClassBasedComponent';
import FunctionalComponentWithHookState from '../components/ComponentsBasic/FunctionalComponentWithHookState';
import AppAssignmentOne from '../components/ComponentsBasic/AssignmentOne/AppAssignmentOne';
import CoditionalRendering from '../components/ConditionalandListRendering/CoditionalRendering'
import OutputtingListsFunctionmap from '../components/ConditionalandListRendering/OutputtingListsFunctionmap'
import AppAssignmentTwo from '../components/ConditionalandListRendering/AssignmentTwo/AppAssignmentTwo'
import StylesDynamically from '../components/StylingComponentsandElements/StylesDynamically'
import StylesCSSModules from '../components/StylingComponentsandElements/StylesCSSModules'
import ComponentsLifecycleBasic from '../components/ComponentsLifecycle/ComponentsLifecycleBasic'

class App extends Component
{
  render()
  {
    return (
      <div>
        <StylesCSSModules />
      </div>
    );
  }
}

export default App;
