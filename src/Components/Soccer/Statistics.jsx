import {useContext} from "react";
import {SoccerContext} from "../../Provider/SoccerProvider.jsx";
import {Table, Thead, Tbody, Tr, Th, Td, Box, Heading, Text} from "@chakra-ui/react";
import PropTypes from "prop-types";

const StatisticsFootball = ({selectedTeam}) => {
    const {stateSoccer} = useContext(SoccerContext);

    if (!stateSoccer.statistics || !stateSoccer.statistics.matchs) {
        return <Text color="red.700">No statistics available</Text>;
    }

    const teamDetails = stateSoccer.teams.find((item) => Number(item.team_id) === Number(selectedTeam));

    if (!teamDetails) {
        return <Text color="red.700">No team selected or team not found.</Text>;
    }

    const {statistics} = stateSoccer;
    const {matchs, goals, goalsAvg} = statistics;

    return (
        <Box mt={4}>
            <Heading as="h3" size="lg" mb={4}>
                Match Statistics for {teamDetails.name}
            </Heading>
            <Table variant="striped" colorScheme="green">
                <Thead>
                    <Tr>
                        <Th>Statistic</Th>
                        <Th>Home</Th>
                        <Th>Away</Th>
                        <Th>Total</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Matches Played</Td>
                        <Td>{matchs.matchsPlayed.home}</Td>
                        <Td>{matchs.matchsPlayed.away}</Td>
                        <Td>{matchs.matchsPlayed.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Wins</Td>
                        <Td>{matchs.wins.home}</Td>
                        <Td>{matchs.wins.away}</Td>
                        <Td>{matchs.wins.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Draws</Td>
                        <Td>{matchs.draws.home}</Td>
                        <Td>{matchs.draws.away}</Td>
                        <Td>{matchs.draws.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Loses</Td>
                        <Td>{matchs.loses.home}</Td>
                        <Td>{matchs.loses.away}</Td>
                        <Td>{matchs.loses.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Goals For</Td>
                        <Td>{goals.goalsFor.home}</Td>
                        <Td>{goals.goalsFor.away}</Td>
                        <Td>{goals.goalsFor.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Goals Against</Td>
                        <Td>{goals.goalsAgainst.home}</Td>
                        <Td>{goals.goalsAgainst.away}</Td>
                        <Td>{goals.goalsAgainst.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Goals Average For</Td>
                        <Td>{goalsAvg.goalsFor.home}</Td>
                        <Td>{goalsAvg.goalsFor.away}</Td>
                        <Td>{goalsAvg.goalsFor.total}</Td>
                    </Tr>
                    <Tr>
                        <Td>Goals Average Against</Td>
                        <Td>{goalsAvg.goalsAgainst.home}</Td>
                        <Td>{goalsAvg.goalsAgainst.away}</Td>
                        <Td>{goalsAvg.goalsAgainst.total}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </Box>
    );
};

StatisticsFootball.propTypes = {
    selectedTeam: PropTypes.number.isRequired,
}
export default StatisticsFootball;
