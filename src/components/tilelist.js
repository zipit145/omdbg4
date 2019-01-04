import React from 'react';

const Tilelist = (props) => {
    return (
      <div className="tileContainer">
          {console.log(props.movies,"movies")}
          {props.movies.map(movie => {
              return(
                <div className="movieCard">
                    <div>{movie.title}</div>
                    <div>{movie.director}</div>
                    <div>{movie.year}</div>
                    <span className={"fa fa-star" + (Number(movie.rating)>=1?" checked":"")}></span>
                    <span className={"fa fa-star" + (Number(movie.rating)>=2?" checked":"")}></span>
                    <span className={"fa fa-star" + (Number(movie.rating)>=3?" checked":"")}></span>
                    <span className={"fa fa-star" + (Number(movie.rating)>=4?" checked":"")}></span>
                    <span className={"fa fa-star" + (Number(movie.rating)>=5?" checked":"")}></span>
                    <div className="imgContainer">
                        <img src={movie.poster_url}/>
                    </div>
                    <button value={movie.id} type="button" class="btn btn-primary" data-toggle="modal" data-target={'#'+movie.id}  onClick={props.movieModal2}>
                        View more
                    </button>
                    <div class="modal fade" id={movie.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">{movie.title}</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div class="modal-body">
                                <form class="updateMovieForm">
                                    <label>Title</label>
                                    <input type="text" defaultValue={props.updateMovieTitle} onChange={props.onChangeUpdateMovieTitle}/>
                                    <label>Director</label>
                                    <input type="text" defaultValue={props.updateMovieDirector} onChange={props.onChangeUpdateMovieDirector}/>
                                    <label>Year</label>
                                    <input type="text" defaultValue={props.updateMovieYear} onChange={props.onChangeUpdateMovieYear}/>
                                    <label>Rating</label>
                                    <input type="text" defaultValue={props.updateMovieRating} onChange={props.onChangeUpdateMovieRating}/>
                                    <label>Poster</label>
                                    <input type="text" defaultValue={props.updateMoviePoster} onChange={props.onChangeUpdateMoviePoster}/>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button  type="button" class="btn btn-secondary" data-dismiss="modal" onClick={props.deleteMovie}>Delete</button>
                                <button id={'submit'+movie.id} type="button" class="btn btn-primary" data-dismiss="modal" onClick={props.putMovie}>Update</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
              )

          })}







      </div>
    )
  }
  
  export default Tilelist