import React from 'react'
import { Flex, Text } from '@chakra-ui/core'



function Footer() {
    return(
        <Flex 
        pos="block"
        p="8vh"
        bottom={0}
        zIndex="99"
        backgroundColor="yankeesblue.100"
        border="1px"
        borderColor="buff.100"
        w="100vw"
        h="10vh"
        align="center"
        justify="center"
        borderRadius="md" 
        >
    <Text textAlign="center" color="white" fontSize="xs">
      Made with <span aria-label="emoji" role="img">♥️</span> by Carlos Fabián 
    </Text>
</Flex>

    )
}

export default Footer;
