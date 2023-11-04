import { Box, Button, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import section1Img from '../Assets/section1Img.png';
import section1Img1 from '../Assets/section1Img1.png';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Section1 = () => {
    return (
        <section>
            <Box p={'0 20px'} position={'relative'} backgroundImage={`url(${section1Img})`} minH={'100vh'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                <Flex position={'sticky'} top={0} justifyContent={'space-between'} p={'15px 50px'}>
                    <Image w={'120px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png' />
                    <Flex gap={'25px'} alignItems={'center'}>
                        <Link color={'white'} href='#'>HOME</Link>
                        <Link color={'white'} href='#'>INDUSTRIES</Link>
                        <Link color={'white'} href='#'>AI SOFTWARE</Link>
                        <Link color={'white'} href='#'>BLOG</Link>
                        <Link color={'white'} href='#'>CONTACT US</Link>
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} gap={'90px'} position={'absolute'} top={'18%'}>
                    <Box w={'40%'}>
                        <Heading color={'white'} fontSize={'40px'}>Data-powered solutions for Industrial Excellence</Heading>
                        <Button borderRadius={'3px'} p={'0 30px'} mt={'30px'} bg={'#007aff'} color={'white'} _hover={{ background: '#3990ed' }}>Read More</Button>
                    </Box>
                    <Image w={'50%'} src={section1Img1} />
                </Flex>
            </Box>
        </section>
    )
}

export default Section1;