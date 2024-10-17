import {useContext, useEffect, useMemo} from "react";
import {fetchSoccerNews, fetchSomeNews} from "../../API/fetchFunctions.js";
import {NewsContext} from "../../Provider/NewsProvider.jsx";
import NewsText from "../News/NewsText.jsx";
import NewsSoccer from "../News/NewsSoccer.jsx";
import NewsH from "../News/NewsH.jsx";
const News = () => {

    const urls = useMemo(() => ({
        url:"https://real-time-news-data.p.rapidapi.com/search?query=Elon%20Musk&limit=10&time_published=anytime&country=US&lang=en",
        url2:"https://football-news11.p.rapidapi.com/api/news-by-date?date=2024-01-01&lang=en&page=1",
    }),[]);

    const options = useMemo(()=> ({
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7d3790c09emsh7fe8df33e6a595ap15261ejsnabfbe3cc0785',
            'x-rapidapi-host': 'football-news11.p.rapidapi.com'
        }
    }),[]);

    const {dispatch} = useContext(NewsContext);

    useEffect(() => {
        fetchSomeNews(urls,options,dispatch).then();
    }, [urls,options,dispatch]);

    useEffect(() => {
        fetchSoccerNews(urls,options,dispatch).then();
    }, [urls,options,dispatch]);

    return (
        <>
            <NewsH/>
            <NewsSoccer/>
            <NewsText/>
        </>
    )
}

export default News;