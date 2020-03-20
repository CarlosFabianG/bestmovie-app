import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Stack, Heading, Text } from "@chakra-ui/core";

function NotFound() {
  return (
    <Flex
    mt="10vh"
    w="100vw"
    h="90vh"
    backgroundColor="yankeesblue.100"
    align="center"
    justify="center"
    >
    <Box>
      <Stack spacing={8} p={8}>
        <Heading textAlign="center" as="h1" color='buff.100'>
          Not Found
        </Heading>
          <Text color="footfeet.100">
              Sorry the page does not exist, BUT you can go home <Link to={'/'}>HERE</Link>
          </Text>
      </Stack>
    </Box>
    </Flex>
  );
}

export default NotFound;