import { Box, Heading, Text, Image } from "@chakra-ui/react";
import aboutPage from "../assets/images/webp/about.webp";

const About = () => {
    return (
        <>
            <Box>
                <Box>
                    <Heading >
                        Soccer, Nutrition, and News: <strong>The Winning Formula</strong>
                    </Heading>
                    <Text >
                        In the world of soccer, performance on the field is about much more than just talent and training. Behind every successful athlete is a well-thought-out strategy that combines physical conditioning, mental preparation, and one key ingredient: nutrition. The connection between soccer, nutrition, and news is becoming increasingly significant, as athletes, coaches, and fans recognize how proper dietary practices and timely information contribute to success.
                    </Text>
                </Box>
                <Image src={aboutPage} alt="Image about soccer nutrition"/>
            </Box>

            <Box >
                <Heading >
                    Soccer Nutrition: <strong>Fueling Peak Performance</strong>
                </Heading>
                <Text >
                    For soccer players, nutrition is the foundation of physical performance. A balanced diet is essential to support the intense demands of training sessions, matches, and recovery. Proper nutrition is not just about eating before a game—it’s a daily commitment to fueling the body with the right mix of carbohydrates, proteins, fats, vitamins, and minerals.
                </Text>
                <Text >
                    Soccer players at all levels—from youth leagues to professionals—are realizing the importance of personalized nutrition plans. These plans can be tailored to an individual player’s needs based on their position, level of activity, and specific health goals.
                </Text>

                <Heading >
                    The Role of News in Soccer and Nutrition
                </Heading>
                <Text >
                    In today’s fast-paced world, staying updated with the latest soccer news is essential for players, coaches, and fans alike. News doesn’t just cover game scores or transfer rumors—it’s a source of valuable information on emerging trends in sports science and nutrition.
                </Text>

                <Heading >
                    A Holistic Approach to Soccer Success
                </Heading>
                <Text >
                    The connection between soccer, nutrition, and news underscores a holistic approach to athletic success. Elite soccer players don’t just rely on training drills and tactical strategies—they optimize their nutrition and stay informed through the latest sports updates.
                </Text>
            </Box>
        </>
    );
};

export default About;
