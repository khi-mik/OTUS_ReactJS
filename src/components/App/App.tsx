import React, { Component } from "react";
import Field from "../Field/Field"
import './App.css';

interface AppProps {
  vertCellCount: number,
  horizCellCount: number
}

class App extends Component<AppProps> {
  static defaultProps = {
    vertCellCount: 10,
    horizCellCount: 10
  }

  render() {
    return (
      <div className="App">
        <Field vertCellCount={this.props.vertCellCount} horizCellCount={this.props.horizCellCount} />
      </div>  
    )
  }
}

export default App;