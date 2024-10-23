import {Box, Image, HStack, Badge, Heading, Text, VStack} from "@chakra-ui/react";
import aboutPageFirst from "../assets/images/webp/about.webp";
import aboutPageSecond from "../assets/images/webp/about_second_image.webp";
import Navbar from "./Navbar.jsx";

const About = () => {
    return (
        <>
            <Navbar/>
            <Box display="flex" flexDirection={{base: "column", md: "row"}} overflow="hidden" alignItems={"center"}
                 boxShadow="4px 4px 6px rgba(255, 165, 0, 0.5)" p={3} m={5}>
                <Box w="45%" m={4}>
                    <Image objectFit="contain" src={aboutPageFirst}
                           alt="Image about soccer nutrition"
                           maxW={{base: "100%"}}
                           height="auto" borderRadius="25"
                           boxShadow="4px 4px 12px darkgreen"
                    />
                </Box>
                <Box p={4} w="55%" m={4}>
                    <VStack>
                        <Heading mb="2" textAlign="center">Soccer, Nutrition, and News: <strong>The Winning
                            Formula</strong></Heading>
                        <Text>
                            In the world of soccer, performance on the field is about much more than just talent and
                            training. Behind every successful athlete is a well-thought-out strategy that combines
                            physical conditioning, mental preparation, and one key ingredient: nutrition. The connection
                            between soccer, nutrition, and news is becoming increasingly significant, as athletes,
                            coaches, and fans recognize how proper dietary practices and timely information contribute
                            to success.
                            For soccer players, nutrition is the foundation of physical performance. A balanced diet is
                            essential to support the intense demands of training sessions, matches, and recovery. Proper
                            nutrition is not just about eating before a game—it’s a daily commitment to fueling the body
                            with the right mix of carbohydrates, proteins, fats, vitamins, and minerals.
                            Soccer players at all levels—from youth leagues to professionals—are realizing the
                            importance of personalized nutrition plans. These plans can be tailored to an individual
                            player’s needs based on their position, level of activity, and specific health goals.
                        </Text>

                        <HStack mt="4" spacing={2}>
                            <Badge colorScheme="green">Soccer</Badge>
                            <Badge colorScheme="purple">Performance</Badge>
                            <Badge colorScheme="orange">Nutrition</Badge>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
            <Box display="flex" flexDirection={{base: "column", md: "row"}} overflow="hidden" alignItems={"center"}
                 boxShadow="7px 6px 6px rgba(128, 90, 213, 0.6)" p={3} m={5}>

                <Box p={4} w="55%" m={4}>
                    <VStack>

                        <Heading mb={2} textAlign="center" size="md">
                            The Role of News in Soccer and Nutrition
                        </Heading>
                        <Text>
                            In today’s fast-paced world, staying updated with the latest soccer news is essential for
                            players, coaches, and fans alike. News doesn’t just cover game scores or transfer
                            rumors<br/>—it’s a source of valuable information on emerging trends in sports science and
                            nutrition. Whether it’s learning about groundbreaking recovery techniques, fitness programs,
                            or dietary adjustments, the latest news can offer critical insights that help athletes stay
                            at the top of their game.

                            For coaches and teams, being well-informed means having access to the latest tactical
                            analysis, opposition scouting reports, and injury updates, which can influence game-day
                            decisions and long-term strategy. On the nutrition front, news outlets are increasingly
                            sharing research on performance-enhancing diets, hydration strategies, and the impact of
                            various supplements on player health and stamina.

                            Moreover, fans who follow soccer closely aren’t just keeping track of their favorite players
                            and clubs<br/>—they’re engaging with a global community that values knowledge about the
                            game’s evolution. From in-depth interviews with sports scientists to articles that break
                            down the effects of nutrition on match-day performance, soccer news has become an invaluable
                            tool for understanding the sport holistically.

                            With so much changing at a rapid pace, being aware of these developments ensures that
                            everyone involved in the sport<br/>—whether on the field or off<br/>—can adapt quickly, make
                            informed decisions, and maintain a competitive edge. Whether it is the latest training
                            methods or insights into the mental well-being of players, soccer news is no longer just
                            about the spectacle; it is about enhancing every aspect of the game.
                        </Text>
                        <Heading mb={2} textAlign="center" size="md">
                            A Holistic Approach to Soccer Success
                        </Heading>
                        <Text>
                            The connection between soccer, nutrition, and news underscores a holistic approach to
                            athletic success. Elite soccer players don’t just rely on training drills and tactical
                            strategies—they optimize their nutrition and stay informed through the latest sports
                            updates.
                        </Text>
                        <HStack mt="4" spacing={2}>
                            <Badge colorScheme="green">Soccer</Badge>
                            <Badge colorScheme="blue">News</Badge>
                            <Badge colorScheme="orange">Nutrition</Badge>
                        </HStack>
                    </VStack>
                </Box>
                <Box w="45%" m={4}>
                    <Image objectFit="contain" src={aboutPageSecond}
                           alt="Image about soccer nutrition"
                           maxW={{base: "100%"}}
                           height="auto" borderRadius="25"
                           boxShadow="4px 4px 12px darkblue"
                    />
                </Box>
            </Box>
        </>
    );
};

export default About;
