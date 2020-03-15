import React, { Component } from 'react';
import { Box } from "@chakra-ui/core";



function GenreCard(props) {


  return (
    <Box bg="tomato" w="100%" p={4} color="white">
  {props.genres.name}
</Box>
  );
}

export default GenreCard;