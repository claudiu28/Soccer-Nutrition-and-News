import {useContext, useEffect, useMemo, useState} from "react";
import {fetchStatisticsTeams, fetchLeagueTeams, fetchPlayersTeam, fetchSoccerAPI} from "../../API/fetchFunctions.js"
import SeasonsFootball from "../Soccer/Seasons.jsx";
import LeagueFootball from "../Soccer/Leagues.jsx";
import TeamsFootball from "../Soccer/Teams.jsx";
import StatisticsFootball from "../Soccer/Statistics.jsx";
import PlayersFootball from "../Soccer/Players.jsx";
import {SoccerContext} from "../../Provider/SoccerProvider.jsx";
import {Box, Divider, Heading} from "@chakra-ui/react"
import Navbar from "../Navbar.jsx";

const DataFootball = () => {

    const [selectedSeason, setSelectedSeason] = useState(0);
    const [selectedLeague, setSelectedLeague] = useState(0);
    const [selectedTeam, setSelectedTeam] = useState(0);

    const urls = useMemo(() => ({
        urlsSeasons: "https://api-football-v1.p.rapidapi.com/v2/players/seasons",
        urlLeagues: "https://api-football-v1.p.rapidapi.com/v2/leagues",
        urlTeam: (leagueId) => `https://api-football-v1.p.rapidapi.com/v2/teams/league/${leagueId}`,
        urlStatistics: (league_id, team_id) => `https://api-football-v1.p.rapidapi.com/v2/statistics/${league_id}/${team_id}`,
        urlPlayers: (team_id, season) => `https://api-football-v1.p.rapidapi.com/v2/players/squad/${team_id}/${season}`,
    }), []);

    const options = useMemo(() => ({
        method: "GET",
        headers: {
            'x-rapidapi-key': '7d3790c09emsh7fe8df33e6a595ap15261ejsnabfbe3cc0785',
            'x-rapidapi-host': 'API-football-v1.p.rapidapi.com',
        }
    }), []);

    const {dispatch} = useContext(SoccerContext);


    useEffect(() => {
        fetchSoccerAPI(urls, options, dispatch).then(() => console.log("Fetch season and leagues"));
    }, [urls, options, dispatch]);

    useEffect(() => {
        if (selectedLeague)
            fetchLeagueTeams(urls, options, dispatch, selectedLeague).then(() => console.log("Fetch leagues teams"));
    }, [urls, options, dispatch, selectedLeague]);

    useEffect(() => {
        if (selectedTeam) {
            fetchStatisticsTeams(urls, options, dispatch, selectedLeague, selectedTeam)
                .then(() => console.log("Fetched team statistics"))
                .catch((err) => console.error("Error fetching statistics", err));
        }
    }, [selectedTeam, selectedLeague, urls, options, dispatch]);

    useEffect(() => {
        if (selectedSeason && selectedTeam)
            fetchPlayersTeam(urls, options, dispatch, selectedTeam, selectedSeason)
                .then(() => console.log("Fetched team players"))
                .catch((err) => console.error("Error fetching players", err));
    }, [urls, options, dispatch, selectedTeam, selectedSeason]);

    const handleChangeTeam = (event) => {
        const leagueId = Number(event.target.value);
        setSelectedLeague(leagueId);
    };

    const handleChangeStatistics = (event) => {
        const teamId = Number(event.target.value);
        setSelectedTeam(teamId);
    }
    const handleChangeSeason = (event) => {
        const season = Number(event.target.value);
        setSelectedSeason(season);
    }

    return (
        <>
            <Navbar/>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={4} width="100%">
                <Heading color="blue.800" mb={3}>Choose your information about soccer</Heading>
                <Divider borderColor="teal.500" borderWidth="2px" my={4}/>

                <Box width="100%" maxW="900px" mb={4}>
                    <LeagueFootball selectedLeague={selectedLeague} handleChangeTeam={handleChangeTeam}/>
                </Box>

                <Box width="100%" maxW="900px" mb={4}>
                    <TeamsFootball selectedLeague={selectedLeague} selectedTeam={selectedTeam}
                                   handleChangeStatistics={handleChangeStatistics}/>
                </Box>

                <Box width="100%" maxW="900px" mb={4}>
                    <StatisticsFootball selectedTeam={selectedTeam}/>
                </Box>

                <Box width="100%" maxW="900px" mb={4}>
                    <SeasonsFootball handleChangeSeason={handleChangeSeason}/>
                </Box>

                <Box width="100%" maxW="900px" mb={4}>
                    <PlayersFootball selectedTeam={selectedTeam} selectedSeason={selectedSeason}/>
                </Box>
            </Box>
        </>
    );
};

export default DataFootball;
