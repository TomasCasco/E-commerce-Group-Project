import React, { useState } from 'react'
import {
    Flex,
    Heading,
    Avatar,
    Text,
    Icon,
    Link,
} from '@chakra-ui/react'
import {
    FiHome,
    FiHeart,
    FiShoppingCart,
    FiSmile,
    FiUser,
} from "react-icons/fi"



export default function Dashboard() {
    
    return (
        <Flex
            h={[null, null, "100vh"]}
            maxW="2000px"
            flexDir={["column", "column", "row"]}
            overflow="hidden"
        >
            {/* Column 1 */}
            <Flex
                w={["100%", "100%", "10%", "15%", "15%"]}
                flexDir="column"
                alignItems="center"
                backgroundColor="#020202"
                color="#fff"
            >
                <Flex
                    flexDir="column"
                    h={[null, null, "100vh"]}
                    justifyContent="space-between"
                >
                    <Flex
                        flexDir="column"
                        as="nav"
                    >
                        <Heading
                            mt={50}
                            mb={[25, 50, 100]}
                            fontSize={["4xl", "4xl", "2xl", "3xl", "4xl",]}
                            alignSelf="center"
                            letterSpacing="tight"
                        >
                            My Account
                        </Heading>
                        <Flex
                            flexDir={["row", "row", "column", "column", "column"]}
                            align={["center", "center", "center", "flex-start", "flex-start"]}
                            wrap={["wrap", "wrap", "nowrap", "nowrap", "nowrap"]}
                            justifyContent="center"
                        >
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link href="/" display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiHome} fontSize="2xl" className="active-icon" />
                                </Link>
                                <Link href="/" _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text className="active">Home</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiShoppingCart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Orders</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiHeart} fontSize="2xl" />
                                </Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Favourites</Text>
                                </Link>
                            </Flex>
                            <Flex className="sidebar-items" mr={[2, 6, 0, 0, 0]}>
                                <Link display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiUser} fontSize="2xl" /></Link>
                                <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                                    <Text>Your Profile</Text>
                                </Link>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex flexDir="column" alignItems="center" mb={10} mt={5}>
                        <Avatar my={2} src="" />
                        <Text textAlign="center">Your Name</Text>
                    </Flex>
                </Flex>
            </Flex>

{/* Column 2 */}
            <Flex
                w={["100%", "100%", "60%", "60%", "55%"]}
                p="3%"
                flexDir="column"
                overflow="auto"
                minH="100vh"
            >
                <Heading
                    fontWeight="normal"
                    mb={4}
                    letterSpacing="tight"
                >
                    We are glad you are here... <Icon as={FiSmile} fontSize="4xl" />
                </Heading>
                
                <Flex justifyContent="space-between" mt={8}>
                    <Flex align="flex-end">
                        <Heading as="h2" size="lg" letterSpacing="tight">Dashboard</Heading>
                    </Flex>
                </Flex>
                <Flex>
                    <Heading mt={50} as="h3" size="lg" letterSpacing="normal">
                        Start shopping now...
                    </Heading> <Link href='/' display={["none", "none", "flex", "flex", "flex"]}>
                                    <Icon as={FiShoppingCart} fontSize="2xl" />
                                </Link>
                    <Link _hover={{ textDecor: 'none' }} display={["flex", "flex", "none", "flex", "flex"]}>
                        <Text>Store</Text>
                    </Link>
                </Flex>
            </Flex>
        
        
        
        
        </Flex>
)}
