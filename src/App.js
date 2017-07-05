import React, { Component } from "react";
import { database } from "./Firebase";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref().on("value", snapshot => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newData = database.ref().child("NEWDATA").push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
        <form className="App--form" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            value={this.state.newData}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
