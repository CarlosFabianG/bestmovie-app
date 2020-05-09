import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import { SimpleGrid } from "@chakra-ui/core"


function MovieList(props){
    
        return(
         <SimpleGrid m="10px" 
                     mt='10vh' 
                     mb="10vh" 
                     minChildWidth="200px" 
                     justify='center' 
                     columns={[1, 2, 3]} 
                     spacing={10}>
              
            {props.moviesByGenre.map( movie => <Link  key={movie.id} to={`/genre/movies/detail/${movie.id}` }>
                                                    <MovieCard  movies={movie}/> 
                                                    </Link>)}     
        </SimpleGrid>
        )
}

export default MovieList