import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tilelist from './components/tilelist'

class App extends Component {
  constructor (props) {
    super();
    this.state ={
      movies:[],
      favorite: ""
    }
  }
  async componentDidMount() {
    const response = await fetch('https://g4-12-6-18g.herokuapp.com/data')
    const json = await response.json()
    this.setState({
      movies:[json]
    })
    console.log(this.state.movies)
  }
  movieModal = () => {
    console.log("here")
  }
  movieModal2 = (e) => {
    this.setState({favorite: e.target.id})
    console.log(this.state.favorite)
  }
  render() {
    return (
      <div className="App">
        <Header />
        
        
      {this.state.movies[0]? <Tilelist movieModal2={this.movieModal2} movieModal={this.movieModal} movies={this.state.movies[0].data}/>: console.log("not data")}
      </div>
    );
  }
}

export default App;
