import React from 'react';

const AddMovie = (props) => {
    return (
      <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addMovie">
            Add Movie
        </button>
        <div class="modal fade" id="addMovie" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                <div class="modal-body">
                    <form class="addMovieForm">
                        <label>Title</label>
                        <input type="text" onChange={props.onChangeAddMovieTitle}/>
                        <label>Director</label>
                        <input type="text" onChange={props.onChangeAddMovieDirector}/>
                        <label>Year</label>
                        <input type="text" onChange={props.onChangeAddMovieYear}/>
                        <label>Rating</label>
                        <input type="text" onChange={props.onChangeAddMovieRating}/>
                        <label>Poster</label>
                        <input type="text" onChange={props.onChangeAddMoviePoster}/>
                    </form>
                </div>
                <div class="modal-footer">
                    <button  type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button id="addMovieSubmit" type="button" class="btn btn-primary" onClick={props.postMovie} data-dismiss="modal">Add New Movie</button>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
  
  export default AddMovie