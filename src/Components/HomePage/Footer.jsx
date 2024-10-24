import logos from "../../assets/images/webp/logo_webpage.webp";
import {ListItem, Text, UnorderedList, Box, Image, Link} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell, faFutbol, faHome, faInfoCircle, faNewspaper} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {Link as RouterLink} from "react-router-dom";

const Footer = () => {
    const navLinks = {
        "Home": <FontAwesomeIcon icon={faHome}/>,
        "Sport": <FontAwesomeIcon icon={faFutbol}/>,
        "Nutrition": <FontAwesomeIcon icon={faDumbbell}/>,
        "News": <FontAwesomeIcon icon={faNewspaper}/>,
        "About": <FontAwesomeIcon icon={faInfoCircle}/>
    };

    const socials = {
        "Github": {icon: <FontAwesomeIcon icon={faGithub}/>, url: "https://github.com/claudiu28"},
        "LinkedIn": {
            icon: <FontAwesomeIcon icon={faLinkedin}/>,
            url: "https://www.linkedin.com/in/claudiu-dr%C4%83ghi%C8%9B%C4%83-a39199295/"
        },
        "Instagram": {icon: <FontAwesomeIcon icon={faInstagram}/>, url: "https://www.instagram.com/claudiu.draghita/"}
    };

    return (
        <>
            <Box display="flex" flexDirection={{base: "column", md: "row"}} justifyContent="space-around"
                 alignItems="center" overflow="hidden" m={4} p={4}>
                <Box>
                    <Image src={logos} alt="logos" objectFit="contain" h="100px" borderRadius="50px"
                           border="3px solid black"/>
                </Box>
                <UnorderedList listStyleType="none">
                    {Object.entries(navLinks).map(([item, icon], index) => (
                        <ListItem key={index}>
                            <Link as={RouterLink} to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                                  display="flex" flexDirection="row" justifyContent="center" alignItems="center"
                            >
                                <Text color="blue.600" fontSize="xl" mr={2}>{icon}</Text>
                                <Text fontSize="xl">{item}</Text>
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
                <UnorderedList listStyleType="none">
                    {Object.entries(socials).map(([social, data]) => (
                        <ListItem key={data.url}>
                            <Link href={data.url} isExternal
                                  display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                                <Text color="blue.600" fontSize="xl" mr={2}>{data.icon}</Text>
                                <Text fontSize="xl">{social}</Text>
                            </Link>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Box>
            <Text textAlign="center" color="cyan.900" mb={5}>©Copyright Sports, News and Nutrition</Text>
        </>
    );
};

export default Footer;
