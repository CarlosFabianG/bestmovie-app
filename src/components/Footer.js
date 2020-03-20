import React from 'react'
import { Flex, Text } from '@chakra-ui/core'



function Footer() {
    return(
        <Flex 
        pos="block"
        p="8vh"
        bottom={0}
        zIndex="99"
        backgroundColor="indigo.100"
        borderTop="1px"
        borderColor="footfeet.100"
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
