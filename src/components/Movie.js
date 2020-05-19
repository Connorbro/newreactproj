import React from 'react';

const Movie = (props) => {
    return(
        <div>
            <ul>
                <li>Favourite movie: {props.favMovie}</li>
                <li>Favourite genre: {props.favGenre}</li>
            </ul>
        </div>

    )
}
export default Movie;