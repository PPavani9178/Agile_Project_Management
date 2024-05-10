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
            <Text fontSize="sm">
              Try Premium free for 14 days
            </Text>
            <Text fontSize="sm">
              See your work in a whole new way with Trello views.
            </Text>
          </Stack>
        </Box>
        <Box flex="1">
          <Stack direction="column" spacing="2">
            <Link fontSize="sm">About Trello</Link>
            <Link fontSize="sm">Jobs</Link>
            <Link fontSize="sm">Apps</Link>
            <Link fontSize="sm">Contact us</Link>
          </Stack>
        </Box>
        <Box flex="1">
          <Stack direction="column" spacing="2">
            <Flex>
              <Icon as={FaGithub} boxSize="6" mr="2" />
              <Icon as={FaTwitter} boxSize="6" mr="2" />
              <Icon as={FaLinkedin} boxSize="6" />
            </Flex>
            <Text fontSize="sm">Čeština</Text>
            <Text fontSize="sm">Privacy Policy</Text>
            <Text fontSize="sm">Terms</Text>
            <Text fontSize="sm">Copyright © {new Date().getFullYear()} Atlassian</Text>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
