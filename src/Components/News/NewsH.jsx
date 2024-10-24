import {useState} from "react";
import {Heading, Box, Text, Image, CardBody, HStack, Badge, Card, CardFooter, Button} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from "@chakra-ui/react";
import HistoryImage from "../../assets/images/webp/HistoryOfFootball.webp";
import {keyframes} from "@emotion/react";
import YourNews from "./YourNews";

const NewsH = () => {
    const [isOpen, setIsOpen] = useState(false);

    const pulse = keyframes`
        0% {
            transform: scale(1);
            opacity: 1;
        }
        50% {
            transform: scale(1.05);
            opacity: 0.8;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }`;

    const animation = `${pulse} 2s infinite ease-in-out`;

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <Card display="flex" flexDirection={{base: "column", md: "row"}} overflow="hidden" p={6} mt={3} mr={8}
                  ml={8}
                  justifyContent="center" alignItems="center" gap={4}>
                <Image objectFit="contain" src={HistoryImage} alt="History Image" h="400px"
                       w={{base: "100%", md: "400px"}}
                       animation={animation} borderRadius='25px'
                />
                <Box w={{base: "100%", md: "calc(100% - 400px)"}}>
                    <CardBody p={4}>
                        <Heading mb="5" color="blue.800" textAlign="center">
                            History of Soccer: Past Era and Modern Era
                        </Heading>
                        <Text textAlign="justify">
                            The history of soccer, or football as it’s known outside North America, spans thousands of
                            years, with roots in various ancient cultures.
                            In medieval Europe, versions of soccer were played across the continent, especially in
                            England, where &quot;mob football&quot;, became popular. These games had few rules and could
                            involve hundreds of players.
                            The sport began to formalize in England during the 19th century. In 1863, the <strong>Football
                            Association (FA)</strong> was founded, and modern soccer rules were established,
                            distinguishing it from other forms like rugby.
                            Soccer spread globally, with the formation of the international governing
                            body <strong>FIFA</strong> in 1904, and the first <strong>World Cup</strong> held in 1930.
                            Since then, soccer has grown into the world’s most popular sport.
                            Today, soccer is played by millions worldwide, and events like the <strong>FIFA World
                            Cup</strong> and <strong>UEFA Champions League</strong> draw billions of viewers. The
                            sport&apos;s accessibility, needing only a ball and open space, has contributed to its
                            global appeal.
                        </Text>
                        <HStack mt="4" display="flex" flexDirection="row" justifyContent="center">
                            <Badge colorScheme="green">Soccer</Badge>
                            <Badge colorScheme="orange">History</Badge>
                            <Badge colorScheme="blue">Champions League</Badge>
                        </HStack>
                    </CardBody>
                    <CardFooter>
                        <Button colorScheme="blue" onClick={openModal}>Open Your News Form</Button>
                    </CardFooter>
                </Box>
            </Card>


            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>Your News Submission</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        <YourNews/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewsH;
