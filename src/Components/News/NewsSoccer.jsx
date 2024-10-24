import {useContext} from "react";
import {NewsContext} from "../../Provider/NewsProvider.jsx";
import defaultImag from "../../assets/images/webp/newsDefaultImage.webp";
import {Card, Image, Text, Link, Heading, Box, Badge} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewsSoccer = () => {
    const {newsState} = useContext(NewsContext);
    const {multipleInfo, errors} = newsState;
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <>
            {errors ? (
                <Text color="red" textAlign="center">Something went wrong, please try again later!</Text>
            ) : multipleInfo.length > 0 ? (
                <Box display="flex" justifyContent="center" alignItems="center" p={4} mt={2} ml={8} mr={8}
                     boxShadow="7px 6px 6px rgba(128, 90, 213, 0.6)">
                    <Box overflow="hidden">
                        <Slider {...settings}>
                            {multipleInfo.map((item, index) => (
                                <Card key={index} p={4} mb={4} borderRadius="lg">
                                    <Box display="flex" justifyContent="center" alignItems="center">
                                        {item.urlToImage ? (
                                            <Image src={item.urlToImage} alt={item.title} objectFit="contain" h="600px"
                                                   borderRadius="25px"
                                            />
                                        ) : (
                                            <Image src={defaultImag} alt={item.title} objectFit="contain" h="600px"
                                                   borderRadius="25px"
                                            />
                                        )}
                                    </Box>
                                    <Heading fontSize="xl" fontWeight="bold" textAlign="center" color="blue.800" mt={3}>
                                        {item.title}
                                    </Heading>
                                    <Box display="flex" flexDirection="column" justifyContent="center"
                                         alignItems="center">
                                        <Text textAlign="center"
                                              mt={2}><strong>Date: {new Date(item.publishedAt).toLocaleDateString()}</strong></Text>
                                        <Badge textAlign="center" colorScheme="blue">News</Badge>
                                    </Box>
                                    <Text textAlign="center">{item.description || "No content available."}</Text>
                                    <Link href={item.url} isExternal color="blue.500" mt={2}>
                                        <Text textAlign="center">See full news</Text>
                                    </Link>
                                    {item.author &&
                                        <Text textAlign="center" mt={2} color="gray.500">{item.author}</Text>}
                                </Card>
                            ))}
                        </Slider>
                    </Box>
                </Box>
            ) : (
                <Text color="blue" textAlign="center">Loading for the moment!</Text>
            )}
        </>
    );
};

export default NewsSoccer;
