import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Link,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack
} from "@chakra-ui/react";
import logo_image from "../assets/images/webp/logo_webpage.webp";
import {Link as RouterLink} from "react-router-dom";

const Navbar = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const navLinks = ["Home", "Sport", "Nutrition", "News", "About"];

    return (
        <Box as="nav" bg="gray.800" px={4} py={3} position="sticky" top="0" zIndex="10">
            <Flex justify="space-around" align="center">
                <Box>
                    <Image src={logo_image} alt="logo" boxSize="3rem" borderRadius={25} border="2px solid #FFFFF0"/>
                </Box>

                <HStack as="ul" spacing={4} display={{base: "none", md: "flex"}} listStyleType="none">
                    {navLinks.map((item, index) => (
                        <Box as="li" key={index}>
                            <Link
                                as={RouterLink}
                                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`} px={2} py={1}
                                rounded="md" _hover={{bg: "gray.700", textDecoration: "none"}} color="white">
                                {item}
                            </Link>
                        </Box>
                    ))}
                </HStack>

                <HStack spacing={2} display={{base: "none", md: "flex"}}>
                    <Input placeholder="Search players..." variant="filled" size="md" width="200px" bg="gray.800"
                           _hover={{bg: "gray.800"}}
                           _focus={{bg: "gray.800"}}
                           _placeholder={{color: "white"}}
                           color="white"/>
                    <IconButton
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>} aria-label="Search" colorScheme="green"
                        size="md"/>
                </HStack>

                <IconButton icon={<FontAwesomeIcon icon={faBars}/>} aria-label="Open Menu"
                            display={{base: "flex", md: "none"}} onClick={onOpen} colorScheme="green"/>
            </Flex>

            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton color="red"/>
                    <DrawerBody>
                        <VStack as="ul" spacing={4} mt={10} listStyleType="none">
                            {navLinks.map((item, index) => (
                                <Box as="li" key={index}>
                                    <Link as={RouterLink}
                                          to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`} px={2}
                                          py={1} rounded="md" _hover={{bg: "gray.700", textDecoration: "none"}}
                                          color="white" onClick={onClose}>
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                            <Box mt={4} display="flex" flexDirection="row" alignItems="center" width="100%">
                                <Input placeholder="Search players..." size="md" width="100%" bg="gray.800"
                                       color="white" _hover={{bg: "gray.800"}} _focus={{bg: "gray.800"}}
                                       _placeholder={{color: "white"}}
                                />
                                <IconButton icon={<FontAwesomeIcon icon={faMagnifyingGlass}/>} aria-label="Search"
                                            colorScheme="green" size="md" ml={2} height="auto" padding={3}/>
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default Navbar;
