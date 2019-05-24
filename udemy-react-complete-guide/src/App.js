import React, { Component } from 'react';
import ClassBasedComponent from './ComponentsBasic/ClassBasedComponent';
import FunctionalComponentWithHookState from './ComponentsBasic/FunctionalComponentWithHookState';
import AppAssignmentOne from './AssignmentOne/AppAssignmentOne';

class App extends Component
{
  render()
  {
    return (
      <div>
        <FunctionalComponentWithHookState />
      </div>
    );
  }
}

export default App;
