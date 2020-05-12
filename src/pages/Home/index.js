import React, {Component} from 'react';
//import {Link} from 'react-router-dom';
import GenreList from '../../components/GenreList';
import SearchBar from '../../components/SearchBar';
import { Stack } from "@chakra-ui/core";
import axios from 'axios';
const URL = 'https://api.themoviedb.org/3/genre/movie/list';
const api_key = process.env.REACT_APP_API_KEY;

class Home extends Component {
    state = {
        genres: []
    }


    componentDidMount() {
        this.getGenres()
    }

    async getGenres(){
        try{
            const {data} = await axios.get(`${URL}?api_key=${api_key}`)
            this.setState({genres: data.genres})
        }catch(error){
            console.log(error)
        } 
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
