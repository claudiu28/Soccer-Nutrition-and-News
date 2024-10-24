import worldCup from "../../assets/images/webp/wordCup.webp";
import news_imag from "../../assets/images/webp/NewsDescription.webp"
import nutrition from "../../assets/images/webp/nutrtion.webp"
import complete from "../../assets/images/webp/complete.webp"
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
    Badge,
    VStack, HStack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (<>
            <Box m={8} overflow="hidden">
                <Grid templateColumns={{base: "repeat(1,1fr)", md: "repeat(3, 1fr)"}} gap="6">
                    <GridItem>
                        <Box>
                            <Card borderRadius="25px" minHeight="600px">
                                <Image src={worldCup} alt="World Cup final" borderRadius="25px"/>
                                <CardBody display="flex" flexDirection="column" justifyContent="center"
                                          alignItems="center">
                                    <Heading textAlign="center" color="cyan.600" size={{base: "md", lg: "lg"}}>World
                                        Cup</Heading>
                                    <Text mt={2} textAlign="center">
                                        The World Cup is more than just a series of soccer matches; it is a global
                                        celebration that transcends cultural and national boundaries.
                                        Every four years, fans from every continent gather either in the host country or
                                        in
                                        front of their screens to cheer for their national teams.
                                    </Text>
                                    <Badge colorScheme="green" textAlign="center">World Cup</Badge>
                                </CardBody>
                                <CardFooter display="flex" justifyContent="center" alignItems="center">
                                    <Button onClick={() => navigate("/sport")} colorScheme="green">Soccer</Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box>
                            <Card borderRadius="25px" minHeight="600px">
                                <Image src={nutrition} alt="Nutrition" borderRadius="25px"/>
                                <CardBody display="flex" flexDirection="column" justifyContent="center"
                                          alignItems="center">
                                    <Heading textAlign="center" color="purple.600" size={{base: "md", lg: "lg"}}>Nutrition:
                                        Best Food</Heading>
                                    <Text mt={2} textAlign="center">
                                        Plant-Based Diets are continuing to grow in popularity due to their health
                                        benefits
                                        and positive environmental impact.
                                        However, it is essential to monitor the sugar content in some beverages to avoid
                                        unwanted calories.
                                    </Text>
                                    <Badge colorScheme="purple" textAlign="center">Nutrition</Badge>
                                </CardBody>
                                <CardFooter display="flex" justifyContent="center" alignItems="center">
                                    <Button onClick={() => navigate("/nutrition")}
                                            colorScheme="purple">Nutrition</Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    </GridItem>

                    <GridItem>
                        <Box>
                            <Card borderRadius="25px" minHeight="600px">
                                <Image src={news_imag} alt="News" borderRadius="25px"/>
                                <CardBody display="flex" flexDirection="column" justifyContent="center"
                                          alignItems="center">
                                    <Heading textAlign="center" color="blue.600" size={{base: "md", lg: "lg"}}>News on
                                        High
                                        Level</Heading>
                                    <Text mt={2} textAlign="center">
                                        News plays a vital role in shaping how we understand the world, connecting us to
                                        events both near and far.
                                        The evolution of news has been remarkable, and in today is digital age, it is
                                        more
                                        accessible than ever.
                                    </Text>
                                    <Badge colorScheme="blue">News</Badge>
                                </CardBody>
                                <CardFooter display="flex" justifyContent="center" alignItems="center">
                                    <Button onClick={() => navigate("/news")} colorScheme="blue">News</Button>
                                </CardFooter>
                            </Card>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
            <Box display="flex" flexDirection={{base: "column", md: "row"}} overflow="hidden" alignItems={"center"}
                 boxShadow="2px 2px 3px rgba(255, 165, 0, 0.5)" p={3} m={5}>
                <Box w="45%" m={4}>
                    <Image objectFit="contain" src={complete}
                           alt="Image about soccer nutrition"
                           maxW={{base: "100%"}}
                           height="auto" borderRadius="25"
                           boxShadow="4px 4px 12px darkgreen"
                    />
                </Box>
                <Box p={4} w="55%" mb={4}>
                    <VStack>
                        <Heading mb="2" textAlign="center">Uniting the World: How News and Soccer Bring Global Stories
                            to Life</Heading>
                        <Text textAlign="justify">
                            In today’s fast-paced world, news and soccer play pivotal roles in connecting people across
                            borders, transcending cultures, and uniting the global community. News acts as a powerful
                            tool for information, shaping the way we understand the world around us, while soccer, the
                            world’s most popular sport, serves as a universal language that ignites passion and fosters
                            unity among millions.

                            The beauty of news lies in its ability to capture the essence of global events, from
                            political shifts to groundbreaking innovations, and from natural disasters to human
                            triumphs. In an age where technology has made information accessible at lightning speed,
                            staying updated is crucial for making informed decisions, forming opinions, and engaging
                            with the world. News outlets not only inform but also inspire conversations, driving change
                            and accountability on a global scale.

                            On the other hand, soccer, epitomized by events like the World Cup, is more than just a
                            sport—it is a cultural phenomenon. Every four years, billions of fans come together to
                            support their teams, creating a shared experience that transcends borders and unites
                            nations. Legendary players such as Pelé, Maradona, and Messi have made history on the pitch,
                            leaving a lasting impact not only on the sport but also on global culture. The World Cup is
                            more than just a tournament; it is a celebration of diversity, passion, and the indomitable
                            human spirit.

                            Together, news and soccer demonstrate the power of storytelling. Whether it’s a breaking
                            news report or the roar of the crowd as a goal is scored, both mediums have the ability to
                            inspire, inform, and bring people closer to what matters most. As the world becomes more
                            interconnected, the stories we tell and the games we play will continue to shape our
                            collective future.
                        </Text>

                        <HStack mt="4" spacing={2}>
                            <Badge colorScheme="green">Soccer</Badge>
                            <Badge colorScheme="blue">News</Badge>
                            <Badge colorScheme="orange">Nutrition</Badge>
                        </HStack>
                    </VStack>
                </Box>
            </Box>
        </>
    );
}

export default Main;

