import {useContext} from "react";
import {NutritionContext} from "../../Provider/FoodProvider.jsx";
import {Card, Image} from "@chakra-ui/react";
import {CardBody, CardHeader} from "@chakra-ui/react";
const Ingredient = () => {
    const {stateNutrition} = useContext(NutritionContext);
    const {ingredients} = stateNutrition;
    return (
        <>
            {ingredients.map((item) => {
                return(
                    <Card key = {item.id}>
                        <CardHeader>{item.title}</CardHeader>
                        <CardBody>
                            <Image src = {item.image} alt = "Ingredients"/>
                        </CardBody>
                    </Card>
                )
            })}
        </>
    )

}

export default Ingredient;