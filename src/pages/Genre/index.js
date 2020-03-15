import React, { Component } from 'react';
import MovieList from '../../components/MovieList';
import SearchBar from '../../components/SearchBar';
import { Stack } from "@chakra-ui/core";
import axios from 'axios';


class Genre extends Component {
    state={
        moviesByGenre: []
    }

componentDidMount(){
this.getMoviesByGenre()
}

async getMoviesByGenre(){
    const { genre_id } = this.props.match.params
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=35abd380b84407de20ef877d5353f792&with_genres=${genre_id}`)
    this.setState({moviesByGenre: data.results})
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
<Stack>
< SearchBar />      
< MovieList moviesByGenre={this.state.moviesByGenre}/>
</Stack>
</Stack>
)
    }
};

export default Genre;