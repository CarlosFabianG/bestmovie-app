import React from 'react'
import {
  Flex,
  Text
} from '@chakra-ui/core';


function NavBar(){
    return(
        < Flex 
        pos="fixed"
            top={0}
            zIndex="99"
            backgroundColor="white"
            w="100vw"
            h="10vh"
            p={0}
            align="center"
            justify="space-between"
            border="1px"
            borderRadius="md" 
            borderColor="gray.100"
        >
        
        <Text fontSize="xl" w={"12vw", "5vw", "8vw"} ml="1vw" fontWeight="bolder">
              Best Movie
            </Text>
        </Flex>
    )
}

export default NavBar;