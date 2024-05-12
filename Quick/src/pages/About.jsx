import React from 'react';
import YouTube from 'react-youtube';
import { Flex, Box, Button, Heading, Text, Image,Card,CardHeader,CardBody } from '@chakra-ui/react';

function About() {
  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };
  const videoId = 'xky48zyL9iA';

  return (
    <Box>
      <Box bg="cyan.400" py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
        <Heading as="h1" fontSize={{ base: '3xl', md: '4xl' }} fontWeight="bold" color="white" textAlign="center" mt={{ base: 4, md: 8 }}>
          Quick Project Management makes it easier for teams to manage projects and tasks
        </Heading>
        <Text color="white" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mt={{ base: 4, md: 8 }}>
          What is Quick Project Management? Quick Project Management is the visual tool that empowers your team to manage any type of project, workflow, or task tracking. Add files, checklists, or even automation: Customize it all for how your team works best. Just sign up, create a board, and you’re off!
        </Text>
        <Flex justifyContent="center" alignItems="center" flexDirection="column" mt={{ base: 8, md: 12 }}>
          <Box mb={4}>
            <YouTube videoId={videoId} opts={opts} />
          </Box>
          <Button colorScheme="white" size="lg" width={{ base: '100%', md: '50%' }}>Signup - it's free</Button>
        </Flex>
        <Text color="white" fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mt={{ base: 8, md: 12 }}>
          Join over 2,000,000 teams worldwide who are using Quick Project Management to get more done.
        </Text>
      </Box>

      <Box py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
      <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} textAlign="center" mb={{ base: 8, md: 12 }}>
          A productivity powerhouse
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mb={{ base: 8, md: 12 }}>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done.</Text>
        <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box w={{ base: '100%', md: '40%' }}>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Boards</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Whatever the project or process, boards keep tasks organized and work moving forward. In a glance you can see everything from “things to do” to “aww yeah we did it!”</Text>
              </CardBody>
            </Card>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Lists</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>The different stages of a task. Start as simple as To Do, Doing, or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</Text>
              </CardBody>
            </Card>
            <Card maxW="md" mx="auto">
              <CardHeader>
                <Heading size="md">Cards</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Cards represent tasks and can hold all the information you need to get the job done. As you make progress, move cards across lists to show their status.</Text>
              </CardBody>
            </Card>
          </Box>
          <Box w={{ base: '100%', md: '40%' }}>
            <Card maxW='3xl'>
              <CardBody>
                <Image src='https://images.ctfassets.net/rz1oowkt5gyp/4kCNudjaBYj90CGgG7Lict/cbafa67336b2007278f50d99ceabfb22/Boards_2x.png?w=1080&fm=webp' alt='cards' borderRadius='lg' />
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
      <Box bg="blue.100" py={{ base: 10, md: 20 }} px={{ base: 4, md: 10 }}>
      <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} textAlign="center" mb={{ base: 8, md: 12 }}>
      Manage tasks with ease
        </Heading>
        <Text fontSize={{ base: 'xl', md: '2xl' }} textAlign="center" mb={{ base: 8, md: 12 }}>Cards keep all of the information your team needs organized and in one place. Assign members, add due dates, leave comments, and more.</Text>
        <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between" alignItems="center">
          <Box w={{ base: '100%', md: '40%' }}>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Members</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Keep everyone accountable and never have to ask “who’s doing that” by adding members to cards for their projects and tasks.</Text>
              </CardBody>
            </Card>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Due dates</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Doing and due dates go hand in hand. They're easy to set, hard to miss (with reminders!), and oh-so-satisfying to mark as “done.”</Text>
              </CardBody>
            </Card>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Attachments</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>No more digging through endless email chains to find attachments. Just drag and drop them onto a card so the right files stay with the right tasks.</Text>
              </CardBody>
            </Card>
            <Card maxW="md" mx="auto" mb={8}>
              <CardHeader>
                <Heading size="md">Checklists</Heading>
              </CardHeader>
              <CardBody>
                <Text fontSize={{ base: 'xl', md: '2xl' }}>Your best tool to overpower overwhelming asks. Break big tasks into small ones, check things off the list, and watch that status bar go to 100% complete.</Text>
              </CardBody>
            </Card>
          </Box>
          <Box w={{ base: '100%', md: '40%' }}>
            <Card maxW='3xl'>
              <CardBody>
                <Image src='https://images.ctfassets.net/rz1oowkt5gyp/61pwmqPlS0wE0LfBQF4S40/bc83cbcc9f0b4986c9f391096b559f79/Card_Back__General_2x.png?w=1080' alt='cards' borderRadius='lg' />
              </CardBody>
            </Card>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default About;
