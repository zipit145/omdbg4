import React from 'react';

const Tilelist = (props) => {
    return (
      <div className="tileContainer">
          {console.log(props.movies,"movies")}
          {props.movies.map(movie => {
                                      {console.log(Number(movie.rating)>1)}
              return(
                <div className="movieCard" onClick={props.movieModal}>
                    <div>{movie.title}</div>
                    <div>{movie.director}</div>
                    <div>{movie.year}</div>
                    <div>{movie.rating}</div>
                    <div className="imgContainer">
                        <img src={movie.poster_url}/>
                    </div>

                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target={'#'+movie.id}>
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

                        <div>Your rating:</div>
                            <span className={"fa fa-star" + (Number(movie.rating)>=1?" checked":"")}></span>
                            <span className={"fa fa-star" + (Number(movie.rating)>=2?" checked":"")}></span>
                            <span className={"fa fa-star" + (Number(movie.rating)>=3?" checked":"")}></span>
                            <span className={"fa fa-star" + (Number(movie.rating)>=4?" checked":"")}></span>
                            <span className={"fa fa-star" + (Number(movie.rating)>=5?" checked":"")}></span>
                        </div>
                        <div class="modal-footer">
                            <button  type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button id={'submit'+movie.id} type="button" class="btn btn-primary" data-dismiss="modal" onClick={(e) => props.movieModal2(e)}>Save changes</button>
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