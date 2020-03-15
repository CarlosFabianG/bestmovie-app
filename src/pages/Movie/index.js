import React, { Component } from 'react';
import { Stack, Box, Image, Badge } from "@chakra-ui/core";
import axios from 'axios';


class Movie extends Component {
state={
    movieDetail: []
}

componentDidMount(){
    this.getDetailMovie()
    }

async getDetailMovie(){
     const { id } = this.props.match.params
     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35abd380b84407de20ef877d5353f792&language=en-US`)
     this.setState({movieDetail:{...data}})
}    

    render(){
return(
    <Stack
    mt="10vh"
    minH="90vh"
    backgroundColor="yankeesblue.100"
    textAlign="center"
    w="100vw"
    spacing={8} 
    >
    <Box p="10px" maxW="sm" borderWidth="1px" borderColor="footfeet.100" rounded="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w200${this.state.movieDetail.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline" >
          <Badge rounded="full" px="2" variantColor="teal">
            Rating:{this.state.movieDetail.vote_average}
          </Badge>
          
        </Box>

        <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {this.state.movieDetail.title}
        </Box>

        <Box>
          {this.state.movieDetail.release_date}
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {this.state.vote_count} reviews
          </Box>
        </Box>
      </Box>
    </Box>
    </Stack>
)
    }
};


export default Movie;