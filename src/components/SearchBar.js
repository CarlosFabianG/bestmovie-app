import React, { Component } from 'react';
import { Input, Flex, IconButton } from "@chakra-ui/core";

class SearchBar extends Component {


    render(){
        return(
            <Flex justify="center" pt="20px">
            <Input placeholder="Search for a movie" w="50vw"/>
            <IconButton aria-label="Search database" icon="search" />
            </Flex>
        )
    }
};

export default SearchBar;