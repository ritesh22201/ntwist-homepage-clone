import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import React from 'react';
import section2Img from '../Assets/section2Img.jpg';

const Section2 = () => {
  return (
    <Flex p={'30px'} justifyContent={'space-between'}>
        <Box w={'46%'}>
            <Heading fontWeight={'500'} color={'#ff3a2d'} fontSize={'40px'}>Mine-To-Mill-To-Mine Optimization</Heading>
            <Text m={'20px 0 30px 0'}>NTWIST’s newest product unlocks up to $250/oz in previously inaccessible value in open pit gold mines by connecting siloed data sources like block models, fleet management systems, stockpile surveys, and plant instruments. This allows your company to better track material flow, and feed properties, identify plan/production discrepancies, and correct resource models and production plans.</Text>
            <Button borderRadius={'3px'} p={'0 30px'} mt={'20px'} bg={'#ff3a2d'} color={'white'} _hover={{ background: '#f57067' }}>Read More</Button>
        </Box>
        <Box w={'50%'}>
            <Image src={section2Img}/>
        </Box>
    </Flex>
  )
}

export default Section2;