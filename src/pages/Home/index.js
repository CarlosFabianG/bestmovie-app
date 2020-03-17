import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import GenreList from '../../components/GenreList';
import SearchBar from '../../components/SearchBar';
import { Stack } from "@chakra-ui/core";
import axios from 'axios';
const api_key = process.env.API_KEY;

class Home extends Component {
    state = {
        genres: []
    }


    componentDidMount() {
        this.getGenres()
    }

    async getGenres(){
        const {data} = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=35abd380b84407de20ef877d5353f792')
        console.log(data)
        this.setState({genres: data.genres})
    }

   

    render(){
    return (
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
      < GenreList genres={this.state.genres}/>
      </Stack>
        </Stack>
    )
    }
}


export default Home;
