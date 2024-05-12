import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from '@chakra-ui/react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return { isAuthenticated, setIsAuthenticated };
};

const Signup = () => {
  const { setIsAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your authentication logic here
    // For demonstration, we'll just show a toast message and update the context
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
    setIsAuthenticated(true);
  };

  return (
    <Box
      maxW="md"
      mx="auto"
      mt={10}
      p={8}
      mb="60"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="password" mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button
          mt={6}
          colorScheme="teal"
          type="submit"
          width="full"
          isLoading={false} // Set to true if submitting/loading
        >
          Sign Up
        </Button>
      </form>
      
    </Box>
    
  );
};

export default Signup;
