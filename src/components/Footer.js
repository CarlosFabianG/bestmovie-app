import React from 'react'
import { Flex, Text } from '@chakra-ui/core'



function Footer() {
    return(
        <Flex 
        pos="block"
        mt="5vh"
        bottom={0}
        zIndex="99"
        backgroundColor="white"
        w="100vw"
        h="10vh"
        align="center"
        justify="center"
        borderRadius="md" 
        >
    <Text textAlign="center" color="gray.900" fontSize="xs">
      Made with <span aria-label="emoji" role="img">♥️</span> by Carlos Fabián 
    </Text>
</Flex>

    )
}

export default Footer;
