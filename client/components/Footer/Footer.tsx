import { ReactNode } from 'react';

import {
  Box,
  Container,
  
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  
  VisuallyHidden,
  chakra,
  
  
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
import Logo from '../Navbar/Logo';
import Link from "next/link";



const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      boxShadow= '0px 0px 1px 1px #999'>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Logo />
              
            </Box>
           
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Products</ListHeader>
            <Link href={"/products/[filterName]"} as={"/products/teclado"}>Gaming Keyboards</Link>
            <Link href={"/products/[filterName]"} as={"/products/microfono"}>Microphones</Link>
            <Link href={"/products/[filterName]"} as={"/products/mouse"}>Gaming Mouse</Link>
            <Link href={"/products/[filterName]"} as={"/products/mousepad"}>Mouse Pads</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Developers</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
          <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Safety Center</Link>
            <Link href={'#'}>Community Guidelines</Link>
          </Stack>
          
        </SimpleGrid>
      </Container>
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={3}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2020 Gamerland. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            
            <SocialButton label={'GitHub'} href={'https://github.com/TomasCasco/E-commerce-Group-Project'}>
              <FaGithub/>
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}