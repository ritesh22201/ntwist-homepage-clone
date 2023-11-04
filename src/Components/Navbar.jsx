import { Flex, Image, Link } from '@chakra-ui/react';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
        <Flex position={'sticky'} top={0} justifyContent={'space-between'} p={'15px 50px'}>
            <Image w={'120px'} src='https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png'/>
            <Flex gap={'25px'} alignItems={'center'}>
                <Link href='#'>HOME</Link>
                <Link href='#'>INDUSTRIES</Link>
                <Link href='#'>AI SOFTWARE</Link>
                <Link href='#'>BLOG</Link>
                <Link href='#'>CONTACT US</Link>
            </Flex>
        </Flex>
    </nav>
  )
}

export default Navbar;