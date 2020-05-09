import React from 'react';
import { Box } from "@chakra-ui/core";



function GenreCard(props) {


  return (
    <Box bg="indigo.100" border="1px" borderColor="footfeet.100" w="100%" p={4} color="buff.100">
  {props.genres.name}
</Box>
  );
}

export default GenreCard;