import slide1Imag from "../../assets/images/avif/sport_imag_1.avif";
import slide2Imag from "../../assets/images/webp/news.webp";
import slide3Imag from "../../assets/images/avif/nutrition_imag_2.avif";
import slide4Imag from "../../assets/images/webp/slide news.webp";
import slide5Imag from "../../assets/images/webp/slide nutrtions.webp";
import slide6Imag from "../../assets/images/webp/soccer_slide.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";
import {Image, Heading, Box, Button, Text} from "@chakra-ui/react";
import Slider from "react-slick";

const Header = () => {
    const navigate = useNavigate();

    const images = [slide1Imag, slide2Imag, slide3Imag, slide4Imag, slide5Imag, slide6Imag];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box display="flex" flexDirection={{base: "column", md: "row"}} alignItems="center" overflow="hidden">
            <Box w={{base: "100%", md: "55%"}} p={4} m={5}>
                <Heading color="blue.800" fontSize={{base: "xl", md: "4xl"}}>Soccer, Nutrition and News</Heading>
                <Text color="grey.700" fontSize={{base: "xs", md: "xl"}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry’s
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to
                    make a type specimen book.
                </Text>
                <Box mt={5}>
                    <Button onClick={() => navigate("/sport")} mr={2} colorScheme="orange" variant="solid">
                        See Sports
                    </Button>
                    <Button onClick={() => navigate("/news")} colorScheme="yellow" variant="solid">See News</Button>
                </Box>
            </Box>

            <Box w={{base: "100%", md: "45%"}} p={4} mb={3}>
                <Slider {...settings}>
                    {images.map((imag, index) => (
                        <Box key={index} borderRadius="20px" overflow="hidden">
                            <Image src={imag} alt={`slide-${index}`} objectFit="cover" height="400px" width="100%"
                                   mb={4} boxShadow="4px 4px 6px rgba(255, 165, 0, 0.5)" borderRadius="20px"/>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>

    );
};

export default Header;
