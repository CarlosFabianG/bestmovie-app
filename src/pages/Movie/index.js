import React, { Component } from 'react';
import { Stack, Box, Image, Flex, Badge, Text, AspectRatioBox, Select } from "@chakra-ui/core";
import SimilarMovies from '../../components/SimilarMovies';
import ReviewModal from '../../components/ReviewModal';
//import MovieDetail from '../../components/MovieDetail';
import axios from 'axios';
const api_key = process.env.API_KEY;

class Movie extends Component {
state={
    rate: '',  
    videos: [],
    movieDetail: [],
    similarMovies: [],
    reviews:[]
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

async getReviews(){
  const { id } = this.props.match.params
  const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=35abd380b84407de20ef877d5353f792&language=en-US&page=1`)
     this.setState({reviews: data.results})
}

handleRateSelect(e){
  const {value} = e.target
  this.setState({rate: value})
}


async rateMovie(e){
e.preventDefault()
const { id } = this.props.match.params
await axios.post(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=35abd380b84407de20ef877d5353f792`, {"value": 8})
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
      <Flex justify="center"  pt="10vh" >
            <Flex>
            <Image border="1px" borderColor="buff.100" src={`https://image.tmdb.org/t/p/w300${this.state.movieDetail.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />
            </Flex>
            <Flex flexDirection="column" pl="20px">
            <Box
          mt="1"
          color="buff.100"
          fontWeight="bold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Title: {this.state.movieDetail.title}
        </Box>
        <Box color="gray.100">
         <Box as="span" fontWeight="bold">Released:</Box> {this.state.movieDetail.release_date}
        </Box>
        <Box color="gray.100">
        <Box as="span" fontWeight="bold">Runtime:</Box> {this.state.movieDetail.runtime}min
        </Box>
        <Box color="gray.100">
        <Box as="span" fontWeight="bold">Budget:</Box> {this.state.movieDetail.budget}
        </Box>
        <Box color="gray.100">
        <Box as="span" fontWeight="bold">Revenue:</Box> {this.state.movieDetail.revenue}
        </Box>
        <Box color="gray.100">
        <Box as="span" fontWeight="bold">Original Language:</Box>{this.state.movieDetail.original_language}
        </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {this.state.movieDetail.vote_count} reviews
          </Box>
          <Flex flexDirection="column">
            <Flex color="buff.100" justify="center">Overview</Flex>
          <Flex  justify="center" w="30vw" color="white">{this.state.movieDetail.overview}</Flex>
        </Flex>
        <Flex justify="center">
        <Select onChange={this.handleRateSelect} placeholder="Rate the movie"  backgroundColor="footfeet.100" w="18vw" color="white">
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
     <Flex justify="center">
     < ReviewModal />
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