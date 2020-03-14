import React, { Component } from 'react';
import MovieCard from './MovieCard';


class MovieList extends Component {
    
    render(){
        return(
            <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
              
             <MovieCard />
             <MovieCard />
             <MovieCard />
             <MovieCard />
             <MovieCard />
             <MovieCard />
              
        </SimpleGrid>
        )
    }
}

export default MovieList;