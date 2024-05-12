import React from "react";
import { Box, Flex, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      as="footer"
      bg="rgb(46,47,117)"
      
      borderTop="1px"
      borderColor="gray.200"
      py="4"
      px={{ base: "4", md: "8" }}
      mt="auto"
      color="white"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: "4", md: "8" }}
        justify="space-between"
        alignItems="center"
      >
        <Box flex="1">
          <Stack spacing="2">
            <Text  fontSize={{ base: 'xl', md: '2xl' }}>
              Try Premium free for 14 days
            </Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              See your work in a whole new way with Quick Project Management views.
            </Text>
          </Stack>
        </Box>
        <Box flex="1">
          <Stack direction="column" spacing="2">
            <Link fontSize={{ base: 'xl', md: '2xl' }}>About </Link>
            <Link fontSize={{ base: 'xl', md: '2xl' }}>Jobs</Link>
            <Link fontSize={{ base: 'xl', md: '2xl' }}>Apps</Link>
            <Link fontSize={{ base: 'xl', md: '2xl' }}>Contact us</Link>
          </Stack>
        </Box>
        <Box flex="1">
          <Stack direction="column" spacing="2">
            <Flex>
              <Icon as={FaGithub} boxSize="6" mr="2" />
              <Icon as={FaTwitter} boxSize="6" mr="2" />
              <Icon as={FaLinkedin} boxSize="6" />
            </Flex>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Čeština</Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Privacy Policy</Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Terms</Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>Copyright © {new Date().getFullYear()} Atlassian</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
