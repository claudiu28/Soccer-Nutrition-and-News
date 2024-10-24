import {useContext} from "react";
import {SoccerContext} from "../../Provider/SoccerProvider.jsx";
import PropTypes from "prop-types";
import {Card, CardBody, CardHeader, SimpleGrid, Heading, Text} from "@chakra-ui/react";

const PlayersFootball = ({selectedTeam, selectedSeason}) => {
    const {stateSoccer} = useContext(SoccerContext);

    if (!Array.isArray(stateSoccer.players) || stateSoccer.players.length === 0) {
        return <Text color="red.700">No players available</Text>;
    }

    const isTeam = stateSoccer.teams.find((item) => Number(item.team_id) === Number(selectedTeam));
    const isSeason = stateSoccer.season.find((item) => Number(item) === Number(selectedSeason));

    if (!isTeam || !isSeason) {
        return <Text color="red.700">No teams or season found</Text>;
    }

    const {players} = stateSoccer;

    return (
        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={6} p={5}>
            {players.map((player) => (
                <Card key={player.player_id} bg="blue.50" border="1px solid" borderColor="blue.200" borderRadius="md">
                    <CardHeader bg="blue.100" textAlign="center">
                        <Heading size="md">{player.player_name}</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text><strong>Position:</strong> {player.position || 0}</Text>
                        <Text><strong>Age:</strong> {player.age || 0}</Text>
                        <Text><strong>Nationality:</strong> {player.nationality || 0}</Text>
                        <Text><strong>Height:</strong> {player.height || 0}</Text>
                        <Text><strong>Weight:</strong> {player.weight || 0}</Text>
                    </CardBody>
                </Card>
            ))}
        </SimpleGrid>
    );
};

PlayersFootball.propTypes = {
    selectedTeam: PropTypes.number.isRequired,
    selectedSeason: PropTypes.number.isRequired,
};

export default PlayersFootball;
