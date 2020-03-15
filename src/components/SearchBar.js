import React, { Component } from 'react';
import { Input, Flex, IconButton } from "@chakra-ui/core";

class SearchBar extends Component {


    render(){
        return(
            <Flex justify="center" pt="20px">
            <Input bg="yankeesblue.100" borderColor="buff.100" placeholder="Search for a movie" w="50vw"/>
            <IconButton bg="yankeesblue.100" border="1px" color="buff.100" borderColor="buff.100" aria-label="Search database" icon="search" />
            </Flex>
        )
    }
};

export default SearchBar;