import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Tilelist from './components/tilelist'
import AddMovie from './components/addmovie'

class App extends Component {
  constructor (props) {
    super();
    this.state ={
      movies:[],
      favorite: "",
      newMovieTitle: "",
      newMovieDirector: "",
      newMovieYear: "",
      newMovieRating: "",
      newMoviePoster: "",
      updateMovieTitle: "",
      updateMovieDirector: "",
      updateMovieYear: "",
      updateMovieRating: "",
      updateMoviePoster: "",
      newMovie: {
        title: "",
        director: "",
        year: "",
        rating: "",
        poster_url: ""
      }
    }
    this.onChangeAddMovieTitle = this.onChangeAddMovieTitle.bind(this)
    this.onChangeAddMovieDirector = this.onChangeAddMovieDirector.bind(this)
    this.onChangeAddMovieYear = this.onChangeAddMovieYear.bind(this)
    this.onChangeAddMovieRating = this.onChangeAddMovieRating.bind(this);
    this.onChangeAddMoviePoster = this.onChangeAddMoviePoster.bind(this);
    this.postMovie = this.postMovie.bind(this)
    this.deleteMovie = this.deleteMovie.bind(this)
    this.putMovie = this.putMovie.bind(this)
    this.onChangeUpdateMovieTitle = this.onChangeUpdateMovieTitle.bind(this)
    this.onChangeUpdateMovieDirector = this.onChangeUpdateMovieDirector.bind(this)
    this.onChangeUpdateMovieYear = this.onChangeUpdateMovieYear.bind(this)
    this.onChangeUpdateMovieRating = this.onChangeUpdateMovieRating.bind(this)
    this.onChangeUpdateMoviePoster = this.onChangeUpdateMoviePoster.bind(this)
  }
  async componentDidMount() {
    const response = await fetch('https://g4-12-6-18g.herokuapp.com/data')
    const json = await response.json()
    this.setState({
      movies:[json]
    })
    console.log(this.state.movies)
  }
  movieModal2 = (e) => {
    this.setState({
      favorite: e.target.value,
    })
    let movie =  this.state.movies[0].data.filter(movie => {
     return movie.id === Number(e.target.value)
    })
    this.setState({
      updateMovieTitle: movie[0].title,
      updateMovieDirector: movie[0].director,
      updateMovieYear: movie[0].year,
      updateMovieRating: movie[0].rating,
      updateMoviePoster: movie[0].poster_url,
    })
    //console.log(movie)
  }
  onChangeUpdateMovieTitle(e){
    this.setState({updateMovieTitle: e.target.value})
  }
  onChangeUpdateMovieDirector(e){
    this.setState({updateMovieDirector: e.target.value})
  }
  onChangeUpdateMovieYear(e){
    this.setState({updateMovieYear: e.target.value})
  }
  onChangeUpdateMovieRating(e){
    console.log(e.target.value)
    this.setState({updateMovieRating: e.target.value})
  }
  onChangeUpdateMoviePoster(e){
    this.setState({updateMoviePoster: e.target.value})
  }
  onChangeAddMovieTitle(e){
    console.log(e.target.value)
    this.setState({newMovieTitle: e.target.value})
  }
  onChangeAddMovieDirector(e){
    this.setState({newMovieDirector: e.target.value})
  }
  onChangeAddMovieYear(e){
    this.setState({newMovieYear: e.target.value})
  }
  onChangeAddMovieRating(e){
    this.setState({newMovieRating: e.target.value})
  }
  onChangeAddMoviePoster(e){
    this.setState({newMoviePoster: e.target.value})
  }
  postMovie() {
    console.log("here")
    console.log(this.state)
    // fetch('https://g4-12-6-18g.herokuapp.com/data', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     title: this.state.newMovieTitle,
    //     director: this.state.newMovieDirector,
    //     year: this.state.newMovieYear,
    //     rating: this.state.newMovieRating,
    //     poster_url: this.state.newMoviePoster
    //   })
    // })
  }
  deleteMovie(){
    fetch('https://g4-12-6-18g.herokuapp.com/data/'+this.state.favorite, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }
  putMovie(){
    fetch('https://g4-12-6-18g.herokuapp.com/data/'+this.state.favorite, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: this.state.updateMovieTitle,
        director: this.state.updateMovieDirector,
        year: this.state.updateMovieYear,
        rating: this.state.updateMovieRating,
        poster_url: this.state.updateMoviePoster
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        {this.state.movies[0]? <Tilelist putMovie={this.putMovie} movieModal2={this.movieModal2} movieModal={this.movieModal} updateMovieTitle={this.state.updateMovieTitle} updateMovieDirector={this.state.updateMovieDirector} updateMovieYear={this.state.updateMovieYear} updateMovieRating={this.state.updateMovieRating} updateMoviePoster={this.state.updateMoviePoster} movies={this.state.movies[0].data} deleteMovie={this.deleteMovie} onChangeUpdateMovieTitle={this.onChangeUpdateMovieTitle} onChangeUpdateMovieDirector={this.onChangeUpdateMovieDirector} onChangeUpdateMovieYear={this.onChangeUpdateMovieYear} onChangeUpdateMovieRating={this.onChangeUpdateMovieRating} onChangeUpdateMoviePoster={this.onChangeUpdateMoviePoster}/>: console.log("not data")}
        <AddMovie postMovie={this.postMovie} onChangeAddMovieTitle={this.onChangeAddMovieTitle} onChangeAddMovieDirector={this.onChangeAddMovieDirector} onChangeAddMovieYear={this.onChangeAddMovieYear} onChangeAddMovieRating={this.onChangeAddMovieRating} onChangeAddMoviePoster={this.onChangeAddMoviePoster}/>
      </div>
    );
  }
}

export default App;
