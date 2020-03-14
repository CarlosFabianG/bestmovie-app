import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GenreList from '../../components/GenreList';
import SearchBar from '../../components/SearchBar';
import { Stack, Input, Flex, IconButton } from "@chakra-ui/core";

function Home() {
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
      < GenreList />
      </Stack>
        </Stack>
    )
}


export default Home;
