import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon,
    Link,
} from '@chakra-ui/react'
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
 
export default function NavBar() {
  return (
    <>
    <Flex
        h='2vh'
        w='100nh'
        bg='#0C0C0C'
        color='grey'
        justifyContent='flex-end'
        fontSize='small' 
        >
        <Flex alignItems='center'>
            <Link 
                display='flex'
                mx='10px'
                alignItems='center'
                p='2px'
                fontSize='11px'
                href='/account'
                _hover={{
                    color: 'white'
                }}      
            >
                <Icon fontSize='medium' mt='5px'>
                <BsFillPersonFill/>
                </Icon>
                <Text>My Account</Text>
            </Link>
            
            |
        </Flex>
        <Flex 
            alignItems='center'
            mx='10px'
            fontSize='11px'
        >
            <Link 
                display='flex'
                alignItems='center'
                p='2px'
                href='/cart'
                _hover={{
                    color: 'white'
                }} 
            >
                <Icon fontSize='medium' mt='5px'>
                <IoMdCart/>
                </Icon>
                <Text>My Cart</Text>
            </Link>
            
                
            
        </Flex>

    </Flex>
    <Flex 
        w='100%'
        bg='#160606'
        justifyContent='space-between'         
        >
        <Heading
            my='.5em'
            ml='2em'
            fontSize='3xl'
            alignSelf='center'
            color='#8C1515'
            >
            
            <Link href='/' _hover={{ color: '#8C1515'}}  >
                Gamerland
            </Link>
        </Heading>
        <Flex alignItems='center' >
            <Flex className='nav-items'>
                <Link _hover={{color: 'white'}}>
                    <Text>PRODUCTS</Text>
                </Link>
            </Flex>
            <Flex className='nav-items'>
                <Link href='/support' _hover={{color: 'white'}}>
                    <Text>SUPPORT</Text>
                </Link>
            </Flex>
            <Flex className='nav-items'>
                <Link href='/aboutus' _hover={{color: 'white'}}>
                    <Text>ABOUT US</Text>
                </Link>
            </Flex>
        </Flex>
        <Flex 
            alignItems='center'
            color='white'
            mr='4em'
        >

            <BsSearch/>
        </Flex>


    </Flex>
    </>
  )
}
