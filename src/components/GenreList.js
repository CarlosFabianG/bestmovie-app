import React, { Component } from 'react';
import GenreCard from './GenreCard';
import {
    SimpleGrid
  } from '@chakra-ui/core'


class GenreList extends Component{
render(){
    return(
        <SimpleGrid m="10px" mt='10vh' minChildWidth="300px" justify='center' columns={[1, 2, 3]} spacing={10}>
          
         <GenreCard />
         <GenreCard />
         <GenreCard />
         <GenreCard />
         <GenreCard />
         <GenreCard />
          
    </SimpleGrid>
    )
}
}

export default GenreList;