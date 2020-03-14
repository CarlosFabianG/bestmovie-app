import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GenreList from '../../components/GenreList';
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
            <Flex justify="center" pt="20px">
     <Input placeholder="Search for a movie" w="50vw"/>
     <IconButton aria-label="Search database" icon="search" />
     </Flex>
      < GenreList />
      </Stack>
        </Stack>
    )
}


export default Home;
