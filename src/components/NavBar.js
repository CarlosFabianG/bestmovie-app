import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flex, Text
} from '@chakra-ui/core';


function NavBar(){
    return(
        < Flex 
        pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="indigo.100"
            w="100vw"
            h="10vh"
            p={0}
            align="center"
            justify="space-between"
            borderBottom="1px"
            borderRadius="md" 
            borderColor="footfeet.100"
        >
        
        <Link to={'/'}>
             <Text
              color="buff.100" 
              fontSize="xl" 
              w={"12vw", "5vw", "8vw"} 
              ml="1vw" 
              fontWeight="bolder"
             >Best Movie</Text> 
            </Link>
        </Flex>
    )
}

export default NavBar;