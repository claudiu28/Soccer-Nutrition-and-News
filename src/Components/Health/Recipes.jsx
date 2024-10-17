import {useContext} from "react";
import {NutritionContext} from "../../Provider/FoodProvider.jsx";
import {Card, CardBody, CardHeader, Image} from "@chakra-ui/react";

const Recipes = () => {
    const { stateNutrition } = useContext(NutritionContext);
    const { recipes } = stateNutrition;

    return (
        <>
            { recipes.map((result) => {
                return (
                    <Card key={result.id}>
                        <CardHeader>{result.title}</CardHeader>
                        <CardBody>
                            <Image src={result.image} alt="Food Image"/>
                        </CardBody>
                    </Card>
                );
            })}
        </>
    );
};

export default Recipes;
