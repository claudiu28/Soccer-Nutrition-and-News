import { useContext } from "react";
import { SoccerContext } from "../../Provider/SoccerProvider.jsx";
import PropTypes from "prop-types";
import { Box, HStack, Image, Select, Text } from "@chakra-ui/react";

const LeagueFootball = ({ selectedLeague, handleChangeTeam }) => {
    const { stateSoccer } = useContext(SoccerContext);

    if (!stateSoccer.leagues || !Array.isArray(stateSoccer.leagues)) {
        return <p>No leagues available</p>;
    }

    const selectedLeagueDetails = stateSoccer.leagues.find(
        (item) => Number(item.league_id) === Number(selectedLeague)
    );

    return (
        <Box>
            <Select
                placeholder="Select a league..." value={selectedLeague} onChange={handleChangeTeam}>
                {stateSoccer.leagues.map((league) => (
                    <option key={league.league_id} value={league.league_id}>
                        {league.name}
                    </option>
                ))}
            </Select>

            {selectedLeagueDetails && (
                <Box mt={3} textAlign="center">
                    <HStack>
                        <Text fontSize="xl">{selectedLeagueDetails.name}</Text>
                        <Image
                            src={selectedLeagueDetails.logo}
                            alt="League Logo"
                        />
                    </HStack>
                </Box>
            )}
        </Box>
    );
};

LeagueFootball.propTypes = {
    selectedLeague: PropTypes.number.isRequired,
    handleChangeTeam: PropTypes.func.isRequired,
};

export default LeagueFootball;
