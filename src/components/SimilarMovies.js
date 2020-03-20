import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import { SimpleGrid } from "@chakra-ui/core";


class SimilarMovies extends Component{
    render(){
        return(
            <SimpleGrid m="10px"mb="13vh" mt='10vh' minChildWidth="200px" justify='center' columns={[1, 2, 3]} spacing={10}>
                 
               {this.props.similarMovies.map( movie => <Link to={`/genre/movies/detail/${movie.id}`}><MovieCard key={movie.id} movies={movie}/> </Link>)}     
                 
           </SimpleGrid>
           )
    }
};

export default SimilarMovies;