import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MovieCard from './MovieCard';
import { SimpleGrid } from "@chakra-ui/core";


class MovieList extends Component {
    
    render(){
        return(
         <SimpleGrid m="10px" mt='10vh' minChildWidth="200px" justify='center' columns={[1, 2, 3]} spacing={10}>
              
            {this.props.moviesByGenre.map( (movie, i) => <Link  to={`/genre/movies/detail/${movie.id}`}><MovieCard key={i} movies={movie}/> </Link>)}     
              
        </SimpleGrid>
        )
    }
};

export default MovieList;