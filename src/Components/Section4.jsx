import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import section4Img from '../Assets/section4Img1.jpg';

const Section4 = () => {
    return (
        <section>
            <Flex mt={'20px'} p={'30px'} justifyContent={'space-between'} alignItems={'center'}>
                <Box w={'46%'}>
                    <Heading fontWeight={'500'} color={'#ff3a2d'} fontSize={'40px'}>Mineral Processing</Heading>
                    <Text color={'black'} m={'20px 0 30px 0'}>NTWIST offers a number of solutions for mills, concentrators, and leach plants. Our solutions help operations to reduce the effect of feed variability, avoid downtime and increase peak throughput while decreasing energy and reagent consumption.</Text>
                    <Button borderRadius={'3px'} p={'0 30px'} bg={'#ff3a2d'} color={'white'} _hover={{ background: '#f57067' }}>Read More</Button>
                </Box>
                <Box w={'48%'}>
                    <Image src={section4Img} />
                </Box>
            </Flex>
        </section>
    )
}

export default Section4;