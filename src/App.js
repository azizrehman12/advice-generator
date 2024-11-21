import React from "react";
import axios from "axios";
import './App.css'

class App extends React.Component {
  state = {
    advice: "", // Initialize advice in state
  };

  // Fetch advice when the component mounts
  componentDidMount() {
    this.fetchAdvice();
  }

  // Fetch advice from the API
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip; // Destructure advice
        this.setState({ advice }); // Update state with the fetched advice
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
        <div>
          <h1>Advice Generator</h1>
          <p style={{ fontSize: "1.5rem", fontStyle: "italic" }}>
            {this.state.advice || "Fetching advice..."}
          </p>
          <button onClick={this.fetchAdvice} style={{ padding: "10px 20px", fontSize: "1rem" }}>
            Generate Advice
          </button>
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
