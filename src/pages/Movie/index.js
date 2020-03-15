import React, { Component } from 'react';
import { Stack, Box, Image, Flex, Badge, Text, AspectRatioBox, Select } from "@chakra-ui/core";
import SimilarMovies from '../../components/SimilarMovies';
import MovieDetail from '../../components/MovieDetail';
import axios from 'axios';


class Movie extends Component {
state={
    rate: '',  
    videos: [],
    movieDetail: [],
    similarMovies: []
}

componentDidMount(){
    this.getDetailMovie()
    this.getSimilarMovies()
    this.getVideo()
    }

async getDetailMovie(){
     const { id } = this.props.match.params
     const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=35abd380b84407de20ef877d5353f792&language=en-US`)
     this.setState({movieDetail:{...data}})
}    

async getSimilarMovies(){
  const { id } = this.props.match.params
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=35abd380b84407de20ef877d5353f792&language=en-US&page=1`)
     this.setState({similarMovies: data.results})
}

async getVideo(){
  const { id } = this.props.match.params
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=35abd380b84407de20ef877d5353f792&language=en-US`)
     this.setState({videos: data.results})
     console.log(data.results)
}

handleRateSelect(e){
  const {value} = e.target
  this.setState({rate: value})
}


async rateMovie(e){
e.preventDefault()
const { id } = this.props.match.params
await axios.post(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=35abd380b84407de20ef877d5353f792`, {"value": 8.5})
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
      <Flex flexDirection="column">
      <Flex  pt="10vh" pl="10vh">
            <Flex>
            <Image src={`https://image.tmdb.org/t/p/w300${this.state.movieDetail.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />
            </Flex>
            <Flex flexDirection="column" >
            <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Title:{this.state.movieDetail.title}
        </Box>
        <Box>
          Released:{this.state.movieDetail.release_date}
        </Box>
        <Box>
          Runtime:{this.state.movieDetail.runtime}
        </Box>
        <Box>
          Budget:{this.state.movieDetail.budget}
        </Box>
        <Box>
          Revenue:{this.state.movieDetail.revenue}
        </Box>
        <Box>
          Original Language:{this.state.movieDetail.original_language}
        </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {this.state.movieDetail.vote_count} reviews
          </Box>
          <Flex>
          <Text color="white">{this.state.movieDetail.overview}</Text>
        </Flex>
        <Flex justify="center">
        <Select onChange={this.handleRateSelect} placeholder="Rate the movie"  backgroundColor="footfeet.100" w="18vw" >
  <option value="option1">1</option>
  <option value="option2">2</option>
  <option value="option3">3</option>
  <option value="option3">4</option>
  <option value="option3">5</option>
  <option value="option3">6</option>
  <option value="option3">7</option>
  <option value="option3">8</option>
  <option value="option3">9</option>
  <option value="option3">10</option>
</Select>
     </Flex>
            </Flex>
        </Flex>
    
</Flex>
    // This video will have equal sides
<AspectRatioBox maxW="560px" ratio={1}>
  <Box
    as="iframe"
    id= {this.state.videos.id}
    key = {this.state.videos.key}
    site = {this.state.videos.site}
    size =  {this.state.videos.size}
    type = {this.state.videos.type}
    name={this.state.name}
    
    allowFullScreen
  />
</AspectRatioBox>
    <Text color="white">You also may be interested in...</Text>
    < SimilarMovies similarMovies={this.state.similarMovies}/>
    </Stack>
)
    }
};


export default Movie;