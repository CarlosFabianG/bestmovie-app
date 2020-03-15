import React, { Component } from 'react';
import GenreCard from './GenreCard';
import {
    SimpleGrid
  } from '@chakra-ui/core'


class GenreList extends Component{

state={
  genres: [GenreCard,GenreCard,GenreCard,GenreCard,GenreCard,GenreCard]
}

render(){
    return(
        <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
          
         {this.state.genres.map(genre => <GenreCard genres={genre}/>)}
          
    </SimpleGrid>
    )
}
}

export default GenreList;