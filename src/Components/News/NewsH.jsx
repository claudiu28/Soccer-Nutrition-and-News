import {Heading,Box,Text} from "@chakra-ui/react"
const NewsH = () => {
    return (
        <Box p={6} maxW="800px" mx="auto">
            <Heading as="h1" size="xl" mb={4}>
                History of Soccer
            </Heading>

            <Text mb={4}>
                The history of soccer, or football as it’s known outside North America, spans thousands of years, with roots in various ancient cultures.
            </Text>

            <Heading as="h2" size="lg" mt={6} mb={3}>
                Early Origins
            </Heading>
            <Text mb={4}>
                The earliest known versions of soccer can be traced back to ancient civilizations such as China, Greece, Rome, and parts of Central America. In China, a game called{" "}
                <strong>Cuju</strong> was played as early as the 2nd and 3rd centuries BC, where players kicked a leather ball through a small goal without using their hands.
            </Text>
            <Text mb={4}>
                In medieval Europe, versions of soccer were played across the continent, especially in England, where &quot;mob football&quot;, became popular. These games had few rules and could involve hundreds of players.
            </Text>

            <Heading as="h2" size="lg" mt={6} mb={3}>
                Modern Soccer
            </Heading>
            <Text mb={4}>
                The sport began to formalize in England during the 19th century. In 1863, the <strong>Football Association (FA)</strong> was founded, and modern soccer rules were established, distinguishing it from other forms like rugby.
            </Text>
            <Text mb={4}>
                Soccer spread globally, with the formation of the international governing body <strong>FIFA</strong> in 1904, and the first <strong>World Cup</strong> held in 1930. Since then, soccer has grown into the world’s most popular sport.
            </Text>

            <Heading as="h2" size="lg" mt={6} mb={3}>
                A Global Phenomenon
            </Heading>
            <Text mb={4}>
                Today, soccer is played by millions worldwide, and events like the <strong>FIFA World Cup</strong> and <strong>UEFA Champions League</strong> draw billions of viewers. The sport&apos;s accessibility, needing only a ball and open space, has contributed to its global appeal.
            </Text>
        </Box>
    );
}


export default NewsH;