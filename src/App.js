
import { Component } from 'react';
import './App.css';





class App extends Component {
  constructor(attr) {
    super(attr)
    this.attr = {
      count:0
    }
    this.state = {
      count: this.attr.count
    }
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => {
          this.setState({
            count:this.state.count + 1
          })
        }}> click me</button>
      </div>
    )
  }
}
  


export default App;
