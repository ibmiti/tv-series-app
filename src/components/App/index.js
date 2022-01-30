import React, { Component } from 'react';
import Intro from '../Intro';
import './App.css';

class App extends Component {
  state = {
    series : []  // stateObject : is set by componentDidMount()'s return
  }

  // component lifecycle management;
  componentDidMount() {
    const series = ["vikings ", "game of thrones"];

    setTimeout(() => {
      this.setState({ series: series }); // sets component with new state after some time
    }, 2000); // 2sec time out delay
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
        </header>
        <Intro message="Here you can find all of your most loved series"/>  
        The length of series array - {this.state.series.length}
      </div>
    );
  }
}

export default App;