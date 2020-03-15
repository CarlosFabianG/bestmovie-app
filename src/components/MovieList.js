import React, { Component } from 'react';
import MovieCard from './MovieCard';
import { SimpleGrid, Link } from "@chakra-ui/core";


class MovieList extends Component {
    
    render(){
        return(
         <SimpleGrid m="10px" mt='10vh' minChildWidth="200px" justify='center' columns={[1, 2, 3]} spacing={10}>
              
            {this.props.moviesByGenre.map( (movie, i) => <Link to={`/genre/movies/${movie.id}`}><MovieCard key={i} moviesByGenre={movie}/> </Link>)}     
              
        </SimpleGrid>
        )
    }
};

export default MovieList;