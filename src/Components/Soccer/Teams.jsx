import {useContext} from "react";
import {SoccerContext} from "../../Provider/SoccerProvider.jsx";
import PropTypes from "prop-types";
import {Select, Box, Image, Stack, Heading, Text} from "@chakra-ui/react";
import {Card, CardBody} from '@chakra-ui/react';

const TeamsFootball = ({selectedLeague, selectedTeam, handleChangeStatistics}) => {
    const {stateSoccer} = useContext(SoccerContext);

    if (!stateSoccer.teams || !Array.isArray(stateSoccer.teams)) {
        return <Text color="red.700">No teams available</Text>;
    }

    const TeamsDetails = stateSoccer.teams.find((item) => Number(item.team_id) === Number(selectedTeam));
    const leagueSelect = stateSoccer.leagues.find((item) => Number(item.league_id) === Number(selectedLeague))
    if (!leagueSelect) {
        return <Text color="red.700">No league selected!</Text>
    }
    return (
        <>
            <Box>
                <Select placeholder="Select a team" value={selectedTeam} onChange={handleChangeStatistics}>
                    {stateSoccer.teams.map((team) => (
                        <option key={team.team_id} value={team.team_id}>
                            {team.name}
                        </option>
                    ))}
                </Select>
            </Box>

            {TeamsDetails && (
                <Card direction={{base: 'column', sm: 'row'}} overflow="hidden" variant="outline" mt={4}>
                    <Image
                        objectFit="cover"
                        maxW={{base: '100%', sm: '200px'}}
                        alt="Club logo"
                        src={TeamsDetails.logo}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size="md">{TeamsDetails.name}</Heading>
                            <Text py="2">
                                Club country is: <strong>{TeamsDetails.country}</strong>.<br/>
                                Founded in: <strong>{TeamsDetails.founded}</strong>.<br/>
                                Stadium name: <strong>{TeamsDetails.venue_name}</strong> with a capacity
                                of <strong>{TeamsDetails.venue_capacity}</strong>.<br/>
                                Located
                                at: <strong>{TeamsDetails.venue_address}</strong> in <strong>{TeamsDetails.venue_city}</strong>.
                            </Text>
                        </CardBody>
                    </Stack>
                </Card>
            )}
        </>
    );
};

TeamsFootball.propTypes = {
    selectedTeam: PropTypes.number.isRequired,
    selectedLeague: PropTypes.number.isRequired,
    handleChangeStatistics: PropTypes.func.isRequired,
};

export default TeamsFootball;
