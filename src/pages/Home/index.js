import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GenreCard from '../../components/GenreCard';
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
        <Flex>
     <Input placeholder="Search for a movie" />
     <IconButton aria-label="Search database" icon="search" />
      < GenreCard />
      </Flex>
        </Stack>
    )
}


export default Home;
