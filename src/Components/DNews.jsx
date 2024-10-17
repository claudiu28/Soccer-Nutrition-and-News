import {ChakraProvider} from "@chakra-ui/react";
import News from "./MainComponents/News.jsx";
import NewsProvider from "../Provider/NewsProvider.jsx";

const DNews = () => {
    return (
        <NewsProvider>
            <ChakraProvider>
                <News/>
            </ChakraProvider>
        </NewsProvider>
    );
}
export default DNews;