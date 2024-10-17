import { useContext } from "react";
import { SoccerContext } from "../../Provider/SoccerProvider.jsx";
import PropTypes from "prop-types";
import {  Card, CardBody, CardHeader, SimpleGrid, Heading, Text } from "@chakra-ui/react";

const PlayersFootball = ({ selectedTeam, selectedSeason }) => {
    const { stateSoccer } = useContext(SoccerContext);

    if (!Array.isArray(stateSoccer.players) || stateSoccer.players.length === 0) {
        return <p>No players available</p>;
    }

    const isTeam = stateSoccer.teams.find((item) => Number(item.team_id) === Number(selectedTeam));
    const isSeason = stateSoccer.season.find((item) => Number(item) === Number(selectedSeason));

    if (!isTeam || !isSeason) {
        return <p>No teams or season found</p>;
    }

    const { players } = stateSoccer;

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} p={5}>
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

                        <Text mt={4}><strong>Goals:</strong> {player.goals?.total || 0}</Text>
                        <Text><strong>Assists:</strong> {player.goals?.assists || 0}</Text>
                        <Text><strong>Shots on Target:</strong> {player.shots?.on || 0}/{player.shots?.total || 0}</Text>

                        <Text mt={4}><strong>Passes Total:</strong> {player.passes?.total || 0}</Text>
                        <Text><strong>Pass Accuracy:</strong> {player.passes?.accuracy || 0}%</Text>

                        <Text mt={4}><strong>Tackles:</strong> {player.tackles?.total || 0}</Text>
                        <Text><strong>Duels Won:</strong> {player.duels?.won || 0}/{player.duels?.total || 0}</Text>
                        <Text><strong>Interceptions:</strong> {player.tackles?.interceptions || 0}</Text>

                        <Text mt={4}><strong>Appearances:</strong> {player.games?.appearences || 0}</Text>
                        <Text><strong>Minutes Played:</strong> {player.games?.minutes_played || 0}</Text>

                        <Text mt={4}><strong>Yellow Cards:</strong> {player.cards?.yellow || 0}</Text>
                        <Text><strong>Red Cards:</strong> {player.cards?.red || 0}</Text>
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
