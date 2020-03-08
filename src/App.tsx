import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component {

  // the render method
  public render() {

    // logic
    const name = 'DevJetzt';

    // return the HTML
    return (
      <div>
        <h1>Hello World!</h1>
        <Child name={name} />
      </div>
    );
  }
}


export default App;
