import {useContext, useEffect, useMemo} from "react";
import {fetchSoccerNews} from "../../API/fetchFunctions.js";
import {NewsContext} from "../../Provider/NewsProvider.jsx";
import NewsH from "../News/NewsH.jsx";
import Navbar from "../Navbar.jsx";
import NewsSoccer from "../News/NewsSoccer.jsx";
const News = () => {

    const urls = useMemo(() => ({
        url:"https://newsapi.org/v2/everything?q=sports&apiKey=5f84469611de4ce1a6ac0bfeab50d8d1",
    }),[]);

    const options = useMemo(()=> ({
        method: 'GET',
    }),[]);

    const {dispatch} = useContext(NewsContext);

    useEffect(() => {
        fetchSoccerNews(urls,options,dispatch).then();
    }, [urls,options,dispatch]);

    return (
        <>
            <Navbar/>
            <NewsSoccer/>
            <NewsH/>

        </>
    )
}

export default News;