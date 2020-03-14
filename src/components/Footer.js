import React from 'react'
import { Flex, Text } from '@chakra-ui/core'



function Footer() {
    return(
        <Flex 
        pos="block"
        mt="5vh"
        bottom={0}
        zIndex="99"
        
        w="100vw"
        h="10vh"
        align="center"
        justify="center"
        border="1px"
        borderRadius="md" 
       
        >
    <Text textAlign="center"  fontSize="xs">
      Made with <span aria-label="emoji" role="img">♥️</span> by Carlos Fabián 
    </Text>
</Flex>

    )
}

export default Footer;