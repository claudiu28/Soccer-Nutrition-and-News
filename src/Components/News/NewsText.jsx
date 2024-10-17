import {useContext} from "react";
import {NewsContext} from "../../Provider/NewsProvider.jsx";
import {Avatar, Card, CardBody, CardHeader, Image,Text} from "@chakra-ui/react";

const NewsText = () => {
    const {newsState} = useContext(NewsContext);
    const {info} = newsState;

    return (
        <>{info.map((item, index) => {
            return(
                <>
                <Card sx={{ maxWidth: 345 }} key={index}>
                <CardHeader
                    avatar={<Avatar alt={item.source_name} src={item.source_favicon_url} />}
                    title={item.source_name}
                />
                <Image
                    height="140"
                    src={item.photo_url}
                    alt="Elon Musk and Taylor Swift"
                />
                <CardBody>
                    <Text variant="h5" component="div">
                        {item.title}
                    </Text>
                    <Text variant="body2" color="text.secondary">
                        {item.snippet}
                    </Text>
                    <Text color="primary" component="a" href={item.link} target="_blank" rel="noopener noreferrer">
                        Read more on Rolling Stone
                    </Text>
                </CardBody>
            </Card></>)
        })}
        </>
    );
}

export default NewsText;