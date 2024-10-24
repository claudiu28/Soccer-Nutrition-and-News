import {useContext} from "react";
import {NutritionContext} from "../../Provider/FoodProvider.jsx";
import {Card, CardBody, Image, Text, Grid, Badge, Heading, CardHeader} from "@chakra-ui/react";

const Recipes = () => {
    const {stateNutrition} = useContext(NutritionContext);
    const {recipes} = stateNutrition;

    return (
        <Grid templateColumns={{base: "1fr", md: "repeat(5, 1fr)"}} gap={4} p={4} m={4}>
            {recipes.map((result) => (
                <Card key={result.id} borderRadius="25px">
                    <CardHeader>
                        <Image src={result.image} alt="Food Image" width="100%"/>
                    </CardHeader>
                    <CardBody display="flex" flexDirection="column" alignItems="center">
                        <Heading mb={2} color="orange.700" textAlign="center">
                            {result.title}
                        </Heading>
                        <Text textAlign="justify" mt={4}>
                            A balanced diet rich in whole foods provides the essential nutrients needed for energy,
                            growth, and overall health. Proper hydration is a crucial component of nutrition, as water
                            supports digestion, nutrient absorption, and metabolic processes. Consuming a variety of
                            fruits, vegetables, lean proteins, and healthy fats promotes optimal body function and
                            helps prevent chronic diseases.
                        </Text>
                        <Badge colorScheme="green" mt={4}>Vegetables</Badge>
                    </CardBody>
                </Card>
            ))}
        </Grid>
    );
};

export default Recipes;
