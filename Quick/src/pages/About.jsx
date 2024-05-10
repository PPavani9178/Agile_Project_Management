import React from 'react';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Flex, Button, Heading, Text, Image } from '@chakra-ui/react';

function About() {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId = 'xky48zyL9iA';
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box>
      <Box bg="cyan.400" py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="white" textAlign="center" mt={{ base: 4, md: 8 }}>
          Quick Project Management makes it easier for teams to manage projects and tasks
        </Heading>
        <Text color="white" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mt={{ base: 4, md: 8 }}>
          What is Quick Project Management? Quick Project Management is the visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automation: Customize it all for how your team works best. Just sign up, create a board, and you’re off!
        </Text>
        <Flex justifyContent="center" alignItems="center" flexWrap="wrap" mt={{ base: 8, md: 12 }}>
          <Box mx={4} width={{ base: '100%', md: '50%' }}>
            <YouTube videoId={videoId} opts={opts} />
          </Box>
          <Box mx={4} width={{ base: '100%', md: '50%' }}>
            <Button colorScheme="white" size="lg" width="100%" mt={{ base: 4, md: 0 }}>
              Signup - it's free
            </Button>
          </Box>
        </Flex>
        <Text color="white" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mt={{ base: 8, md: 12 }}>
          Join over 2,000,000 teams worldwide who are using Quick Project Management to get more done.
        </Text>
        <Flex justifyContent="center" mt={{ base: 8, md: 12 }} flexWrap="wrap">
          <Box mx={4}>
            <Image src="https://images.ctfassets.net/rz1oowkt5gyp/5R2Z2uNm0syrV3SRka6U2h/f29d41f1c3e2eb55dbde443f07b4552d/coinbase_2x.png?w=323&fm=webp" alt="" />
          </Box>
          <Box mx={4}>
            <Image src="https://images.ctfassets.net/rz1oowkt5gyp/6siYQZNhk6oCQZSW7nDsZM/dd430f7c60496a4a4a86346ccdcc7f6a/JohnDeere.svg" alt="" />
          </Box>
          <Box mx={4}>
            <Image src="https://images.ctfassets.net/rz1oowkt5gyp/xsZg04XyKQXvIIfkvoF9k/c1e13a857ab867754c652c5da3e87504/Grand_Hyatt.svg" alt="" />
          </Box>
          <Box mx={4}>
            <Image src="https://images.ctfassets.net/rz1oowkt5gyp/4mi0yTvx9p26OvEyGfpfqy/8148229f21c056ac0c381a6c1742842b/logo-google.svg" alt="" />
          </Box>
        </Flex>
      </Box>
      {/* Add the rest of your content here */}
    </Box>
  );
}

export default About;
