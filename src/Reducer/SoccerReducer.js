const ReducerSoccer = (state, action) => {
    switch (action.type){
        case "SEASON_FOOTBALL":
            return {...state, season: action.result};
        case "STATISTICS_FOOTBALL":{
            return {...state,statistics: action.result };
        }
        case "TEAM_FOOTBALL":{
            return {...state, teams: action.result };
        }
        case "LEAGUES_FOOTBALL":{
            return {... state, leagues: action.result };
        }
        case "PLAYERS_FOOTBALL":{
            return {...state, players: action.result};
        }
        case "ERROR_FOOTBALL":{
            return {...state, error: action.result};
        }
        default:
            return state;
    }

}
export default ReducerSoccer;