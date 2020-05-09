import React from 'react'
import GenreCard from './GenreCard'
import {Link} from 'react-router-dom'
import {
    SimpleGrid
  } from '@chakra-ui/core'


function GenreList(props){

    return(
        <SimpleGrid m="10px" 
                    mt='10vh' 
                    minChildWidth="300px" 
                    justify='center' 
                    columns={[1, 2, 3]} 
                    spacing={10}>
          
         {props.genres.map(genre => <Link to={`/genre/movies/${genre.id}`} key={genre.id}>
                                    <GenreCard  genres={genre}/> 
                                    </Link>)}
        </SimpleGrid>
    )
}

export default GenreList