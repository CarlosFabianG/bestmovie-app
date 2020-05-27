import React from 'react'
import { PseudoBox, Box, Image, Badge, Flex } from "@chakra-ui/core"



function MovieCard(props) {
 
  return (
    <PseudoBox  p="10px" 
          objectFit="cover" 
          maxW="sm" borderWidth="1px" 
          borderColor="footfeet.100" 
          rounded="lg" 
          overflow="hidden"
          _hover={{transform:"scale(1.1)"}}>
            
      <Image src={`https://image.tmdb.org/t/p/w200${props.movies.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />

      <Box p="6">
        <Flex d="flex" alignItems="baseline" justify="center">
          <Badge justify="center" rounded="full" px="2" variantColor="teal">
            Rating:{props.movies.vote_average}
          </Badge>
          
        </Flex>

        <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h5"
          lineHeight="tight"
          isTruncated
        >
          {props.movies.title}
        </Box>
        <Flex justify="center" mt="2" alignItems="center">
          
          <Box  isTruncated as="span" ml="2" color="gray.600" fontSize="sm">
            {props.movies.overview}min
          </Box>
        </Flex>
      </Box>
    </PseudoBox>
  );
};

export default MovieCard