import { Box, Link } from '@chakra-ui/react'
import Cart from '../components/Cart/Cart'
import NavBar from '../components/Navbar/navBar'




export default function Home() {
  return (
    <>
      
      <NavBar/>
      
      <Box w='100%' align='center'>

      <Link href='/products' px='2' w="20" border="1px solid black" borderRadius="20" _hover={{bgColor:'gray.200', textDecoration:'none' }} >
        add more products
      </Link>
      </Box>

     

    </>
  )
}
