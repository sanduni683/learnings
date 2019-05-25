import React, { Component } from 'react';
import ClassBasedComponent from './ComponentsBasic/ClassBasedComponent';
import FunctionalComponentWithHookState from './ComponentsBasic/FunctionalComponentWithHookState';
import AppAssignmentOne from './ComponentsBasic/AssignmentOne/AppAssignmentOne';
import CoditionalRendering from './ConditionalandListRendering/CoditionalRendering'
import OutputtingListsFunctionmap from './ConditionalandListRendering/OutputtingListsFunctionmap'
import AppAssignmentTwo from './ConditionalandListRendering/AssignmentTwo/AppAssignmentTwo'

class App extends Component
{
  render()
  {
    return (
      <div>
        <AppAssignmentTwo />
      </div>
    );
  }
}

export default App;
