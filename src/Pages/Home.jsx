import { Box } from '@chakra-ui/react';
import React from 'react'
import Navbar from '../Components/Navbar';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <Box w='100%'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Footer/>
    </Box>
  )
}

export default Home;