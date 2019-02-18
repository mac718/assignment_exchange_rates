import React, { Component } from 'react';
import './App.css';
import LatestExchangeRates from './LatestExchangeRates';
require('dotenv').config();

class App extends Component {
  constructor(){
    super();
    this.state = {
      rates: '',
    }
  }

  componentDidMount() {
    const baseUri = `http://data.fixer.io/api/latest?access_key=${process.env.REACT_APP_API_KEY}`
    fetch(baseUri)
      .then(response => {
        return response.json()
      })
      .then(rate => {
        console.log(JSON.stringify(rate))
        this.setState({
          rates: rate.rates
        }, console.log(this.state.rates))

      })
  }
  
  render() {
    return (
      <div className="App container">
        <h1 className='jumbotron'>Exchange Rates</h1>
        <LatestExchangeRates rates={this.state.rates} />
      </div>
    );
  }
}

export default App;
