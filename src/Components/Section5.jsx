import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import section5Img from '../Assets/section5Img1.png';

const Section5 = () => {
    return (
        <section>
            <Flex p={'30px'} mt={'20px'} gap={'40px'} alignItems={'center'}>
                <Box w={'47%'}>
                    <Image src={section5Img} />
                </Box>
                <Box w={'46%'}>
                    <Heading mb={'20px'} fontWeight={'500'} color={'#ff3a2d'} fontSize={'40px'}>Oil & Gas</Heading>
                    <Text>
                        Oil and Gas plants require a high level of control and robustness in their operation due to the high risks to people and environment.
                        <br />
                        <br />
                        NTWIST helps Oil & Gas customers to analyze historical data, identify opportunities for process control improvements, and reduce variability in any part of the process, thus providing enhanced reliability and safety.
                    </Text>
                    <Button borderRadius={'3px'} p={'0 30px'} mt={'20px'} bg={'#ff3a2d'} color={'white'} _hover={{ background: '#f57067' }}>Read More</Button>
                </Box>
            </Flex>
        </section>
    )
}

export default Section5;