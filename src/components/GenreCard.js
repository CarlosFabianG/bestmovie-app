import React from 'react';
import { PseudoBox } from "@chakra-ui/core";



function GenreCard(props) {

  return (
    <PseudoBox 
        bg="indigo.100" 
        border="1px" 
        transformr="scale(1.5)"
        borderColor="footfeet.100" 
        w="100%" p={4} 
        color="buff.100"
        _hover={{transform:"scale(1.1)"}}>

              {props.genres.name}

    </PseudoBox>
  );
}

export default GenreCard;