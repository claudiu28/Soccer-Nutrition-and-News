import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { Box, Flex, HStack, IconButton, Image, Input, Link, useDisclosure, Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton, VStack } from "@chakra-ui/react";
import logo_image from "../assets/images/webp/logo_webpage.webp";

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // Drawer control for mobile menu
    const navLinks = ["Home", "Sport", "Nutrition", "News", "About", "Contact"];

    return (
        <Box as="nav" bg="gray.800" px={4} py={3}>
            <Flex justify="space-between" align="center">
                {/* Logo */}
                <Box>
                    <Image src={logo_image} alt="logo" boxSize="5rem" borderRadius={25} />
                </Box>

                {/* Desktop Navigation Links */}
                <HStack as="ul" spacing={4} display={{ base: "none", md: "flex" }} listStyleType="none">
                    {navLinks.map((item, index) => (
                        <Box as="li" key={index}>
                            <Link
                                as={RouterLink} // Chakra UI's Link as React Router's Link
                                to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                                px={2}
                                py={1}
                                rounded="md"
                                _hover={{ bg: "gray.700", textDecoration: "none" }}
                                color="white"
                            >
                                {item}
                            </Link>
                        </Box>
                    ))}
                </HStack>

                {/* Search Section */}
                <HStack spacing={2} display={{ base: "none", md: "flex" }}>
                    <Input placeholder="Search something..." variant="filled" size="md" width="200px" />
                    <IconButton
                        icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                        aria-label="Search"
                        colorScheme="blue"
                        size="md"
                    />
                </HStack>

                {/* Mobile Menu Icon */}
                <IconButton
                    icon={<FontAwesomeIcon icon={faBars} />}
                    aria-label="Open Menu"
                    display={{ base: "flex", md: "none" }} // Show only on mobile
                    onClick={onOpen}
                    variant="outline"
                    colorScheme="whiteAlpha"
                />
            </Flex>

            {/* Mobile Drawer Menu */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton color="white" />
                    <DrawerBody>
                        <VStack as="ul" spacing={4} mt={10} listStyleType="none">
                            {navLinks.map((item, index) => (
                                <Box as="li" key={index}>
                                    <Link
                                        as={RouterLink}
                                        to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                                        px={2}
                                        py={1}
                                        rounded="md"
                                        _hover={{ bg: "gray.700", textDecoration: "none" }}
                                        color="white"
                                        onClick={onClose} // Close drawer on link click
                                    >
                                        {item}
                                    </Link>
                                </Box>
                            ))}
                            {/* Search section inside the mobile drawer */}
                            <Box mt={4}>
                                <Input placeholder="Search something..." variant="filled" size="md" width="100%" />
                                <IconButton
                                    icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                                    aria-label="Search"
                                    colorScheme="blue"
                                    size="md"
                                    mt={2}
                                />
                            </Box>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    );
};

export default Navbar;
