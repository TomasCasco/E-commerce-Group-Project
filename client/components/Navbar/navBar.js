import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon,
    Link,
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
} from '@chakra-ui/react'
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { IoMdCart } from "react-icons/io";

 
export default function NavBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                href="/cart"
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
            <Menu isOpen={isOpen}>
                <MenuButton
                    
                    
                    py={[1, 2, 2]}
                    px={4}
                    borderRadius={5}
                    _hover={{color: 'white'}}
                    aria-label="Courses"
                    fontWeight="normal"
                    onMouseEnter={onOpen}
                    onMouseLeave={onClose}
                >
                    PRODUCTS {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </MenuButton>
                <MenuList bgColor="#1606068a" onMouseEnter={onOpen} onMouseLeave={onClose} borderColor='#160606'>
                    <MenuItem as='a' href='/products' _hover={{color: '#160606'}}>Gaming Keyboars</MenuItem>
                    <MenuItem as='a' href='/products' _hover={{color: '#160606'}}>Gaming Mice</MenuItem>
                    <MenuItem as='a' href='/products' _hover={{color: '#160606'}}>Headsets</MenuItem>
                    <MenuItem as='a' href='/products' _hover={{color: '#160606'}}>Mouse Pads</MenuItem>
                </MenuList>
            </Menu>
                
            </Flex>
            <Flex className='nav-items'>
                <Link href='/support' _hover={{color: 'white'}} py={[1, 2, 2]} mx={1}>
                    <Text>SUPPORT</Text>
                </Link>
            </Flex>
            <Flex className='nav-items'>
                <Link href='/aboutus' _hover={{color: 'white'}} py={[1, 2, 2]} mx={1}>
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
