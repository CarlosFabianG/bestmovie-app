import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GenreList from '../../components/GenreList';
import SearchBar from '../../components/SearchBar';
import { Stack } from "@chakra-ui/core";

class Home extends Component {
    state = {
        genres: []
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
      < GenreList genres={this.genres}/>
      </Stack>
        </Stack>
    )
    }
}


export default Home;
