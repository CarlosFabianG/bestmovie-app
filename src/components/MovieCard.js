import React, { Component } from 'react';
import { Box, Image, Badge } from "@chakra-ui/core";



function MovieCard(props) {
 
  return (
    <Box p="10px" maxW="sm" borderWidth="1px" borderColor="footfeet.100" rounded="lg" overflow="hidden">
      <Image src={`https://image.tmdb.org/t/p/w200${props.moviesByGenre.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />

      <Box p="6">
        <Box d="flex" alignItems="baseline" >
          <Badge rounded="full" px="2" variantColor="teal">
            Rating:{props.moviesByGenre.vote_average}
          </Badge>
          
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