import { Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {BsLinkedin, BsTwitter} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer style={{backgroundColor : '#081528', padding : '55px 0'}}>
        <VStack justifyContent={'center'}>
            <Image w={'120px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'/>
            <Flex m={'10px 0'} gap={'30px'} color={'white'}>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Contact Us</Text>
                <Text>Privacy Policy</Text>
                <Text>Sitemap</Text>
            </Flex>
            <Text m={'20px 0 15px 0'} color={'gray.500'}>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</Text>
            <Flex gap={'10px'}>
                <Button _hover={{backgroundColor : '#132b4f'}} _active={'none'} bg={'#081528'} color={'gray.200'}><BsTwitter/></Button>
                <Button _hover={{backgroundColor : '#132b4f'}} _active={'none'} bg={'#081528'} color={'gray.200'}><BsLinkedin/></Button>
            </Flex>
            <Text mt={'10px'} color={'gray.500'}>© 2022. Ntwist Inc.</Text>
        </VStack>
    </footer>
  )
}

export default Footer;