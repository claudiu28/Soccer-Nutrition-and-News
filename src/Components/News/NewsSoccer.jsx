import { useContext } from "react";
import { NewsContext } from "../../Provider/NewsProvider.jsx";
import { Card, Image, Text, Link } from "@chakra-ui/react";

const NewsSoccer = () => {
    const { newsState } = useContext(NewsContext);
    const { multipleInfo } = newsState;

    return (
        <>
            {multipleInfo.map((item, index) => {
                return (
                    <Card key={index} p={4} mb={4} borderWidth="1px" borderRadius="lg">
                        <Text fontSize="xl" fontWeight="bold">{item.title}</Text>
                        <Image src={item.image} alt={item.title} objectFit="cover" />
                        <Text mt={2}>Date: {new Date(item.published_at).toLocaleDateString()}</Text>
                        <Link href={item.original_url} isExternal color="blue.500" mt={2}>
                            See full news
                        </Link>
                        <Text mt={2} color="gray.500">{item.alias}</Text>
                    </Card>
                );
            })}
        </>
    );
}

export default NewsSoccer;
