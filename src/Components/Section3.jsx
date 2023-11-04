import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import section3Img1 from '../Assets/section3Img1.jpg';

const Section3 = () => {
    return (
        <Flex p={'30px'} mt={'20px'} gap={'40px'} alignItems={'center'}>
            <Box w={'47%'}>
                <Image src={section3Img1} />
            </Box>
            <Box w={'46%'}>
                <Heading mb={'20px'} fontWeight={'500'} color={'#ff3a2d'} fontSize={'40px'}>Sustainability</Heading>
                <Text>
                    Environmental stewardship is a priority for NTWIST. We help our customers to minimize their sustainability  impact on the planet. Emissions or environmental targets are used alongside productivity targets to define success for our customers.
                    <br />
                    <br />
                    With the increasing relevance of carbon accounting and emissions tracking, NTWIST offers a suite of tools to increase visibility into environmental performance and help processing plants track, manage, optimize, and report key metrics.
                </Text>
                <Button borderRadius={'3px'} p={'0 30px'} mt={'20px'} bg={'#ff3a2d'} color={'white'} _hover={{ background: '#f57067' }}>Read More</Button>
            </Box>
        </Flex>
    )
}

export default Section3;