import React, { Component } from 'react';
import { Box, Image, Badge } from "@chakra-ui/core";



function MovieCard(props) {
 
  return (
    <Box maxW="sm" borderWidth="1px" borderColor="footfeet.100" rounded="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w200${props.moviesByGenre.poster_path}`} alt="movie_poster" />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" variantColor="teal">
            Rating:{props.moviesByGenre.vote_average}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {props.popularity} beds &bull; {props.vote_count} baths
          </Box>
        </Box>

        <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {props.moviesByGenre.title}
        </Box>

        <Box>
          {props.moviesByGenre.release_date}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.moviesByGenre.vote_count} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieCard;