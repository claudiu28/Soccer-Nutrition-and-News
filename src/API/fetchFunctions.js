export const fetchSoccerAPI = async (urls, options, dispatch) => {
    try {
        const seasons = await fetch(urls.urlsSeasons, options);
        const toJsonSeasons = await seasons.json();
        dispatch({type: "SEASON_FOOTBALL", result: toJsonSeasons.api.players});

        const leagues = await fetch(urls.urlLeagues, options);
        const toJsonLeagues = await leagues.json();
        dispatch({type: "LEAGUES_FOOTBALL", result: toJsonLeagues.api.leagues});

    } catch (error) {
        dispatch({type: "ERROR_FOOTBALL", result: error});
    }
};

export const fetchLeagueTeams = async (urls, options, dispatch, leagueId) => {
    try {
        const leagueFetch = await fetch(urls.urlTeam(leagueId), options);
        const toJsonTeams = await leagueFetch.json();
        dispatch({type: "TEAM_FOOTBALL", result: toJsonTeams.api.teams});
    } catch (error) {
        dispatch({type: "ERROR_FOOTBALL", result: error});
    }
};

export const fetchStatisticsTeams = async (urls, options, dispatch, leagueId, teamId) => {
    try {
        const statisticsFetch = await fetch(urls.urlStatistics(leagueId, teamId), options);
        const toJsonStatistics = await statisticsFetch.json();
        dispatch({type: "STATISTICS_FOOTBALL", result: toJsonStatistics.api.statistics});
    } catch (error) {
        dispatch({type: "ERROR_FOOTBALL", result: error});
    }
};

export const fetchPlayersTeam = async (urls, options, dispatch, teamId, season) => {
    try {
        const playersFetch = await fetch(urls.urlPlayers(teamId, season), options);
        const toJsonPlayers = await playersFetch.json();
        dispatch({type: "PLAYERS_FOOTBALL", result: toJsonPlayers.api.players});
    } catch (error) {
        dispatch({type: "ERROR_FOOTBALL", result: error});
    }
};

export const fetchFoodsData = async (urls, options, dispatch) => {
    try {
        const recipe = await fetch(urls.urls1, options);
        const recipeJson = await recipe.json();
        dispatch({type: "SEARCH_RECIPE", result: recipeJson.results});
    } catch (error) {
        dispatch({type: "ERROR_FOODS", result: error});
    }
};

export const fetchIncExp = async (urls, options, dispatch) => {
    try {
        const ingredient = await fetch(urls.urls2, options);
        const ingredientToJson = await ingredient.json();
        dispatch({type: "INC_FOOD_EXP", result: ingredientToJson["products"]});
    } catch (error) {
        dispatch({type: "ERROR_FOODS", result: error});
    }
};

export const fetchSomeNews = async (urls, options, dispatch) => {
    try {
        const dates = await fetch(urls.url, options);
        const dataJson = await dates.json();
        dispatch({type: "DATA", result: dataJson.data});
    } catch (error) {
        dispatch({type: "ERROR_NEWS", result: error});
    }
};

export const fetchSoccerNews = async (urls, options, dispatch) => {
    try {
        const dates = await fetch(urls.url2, options);
        const dataJson = await dates.json();
        dispatch({type: "NEWS_M_INFO", result: dataJson.result});
    } catch (error) {
        dispatch({type: "ERROR_NEWS", result: error});
    }
};
