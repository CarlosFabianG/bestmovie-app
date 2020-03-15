import React from 'react';
import { Flex, Image, Text, Box } from "@chakra-ui/core";


function MovieDetail(props){
    return(
        <Flex  pt="10vh" pl="10vh">
            <Flex>
            <Image src={`https://image.tmdb.org/t/p/w300${props.movieDetail.poster_path}`} alt="movie_poster" 
      objectFit="cover"
      rounded="md"
      />
            </Flex>
            <Flex flexDirection="column" >
            <Box
          mt="1"
          color="white"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Title:{props.movieDetail.title}
        </Box>
        <Box>
          Released:{props.movieDetail.release_date}
        </Box>
        <Box>
          Runtime:{props.movieDetail.runtime}
        </Box>
        <Box>
          Budget:{props.movieDetail.budget}
        </Box>
        <Box>
          Revenue:{props.movieDetail.revenue}
        </Box>
        <Box>
          Original Language:{props.movieDetail.original_language}
        </Box>
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {props.movieDetail.vote_count} reviews
          </Box>
          <Flex>
          <Text color="white">{props.movieDetail.overview}</Text>
        </Flex>
            </Flex>
        </Flex>
    )
}

export default MovieDetail;