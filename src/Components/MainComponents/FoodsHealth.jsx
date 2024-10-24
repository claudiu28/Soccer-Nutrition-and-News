import Video from "../Health/VideoNutritions.jsx";
import {useContext, useEffect, useMemo} from "react";
import {NutritionContext} from "../../Provider/FoodProvider.jsx";
import {fetchFoodsData} from "../../API/fetchFunctions.js";
import Recipes from "../Health/Recipes.jsx";
import Navbar from "../Navbar.jsx";
import FoodForm from "../Health/FoodForm.jsx";
import ExtraText from "../Health/ExtraText.jsx";
import {Box} from "@chakra-ui/react"

const FoodsHealth = () => {

    const urls = useMemo(() => ({
        urls1: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=10",
    }), []);

    const options = useMemo(() => ({
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7d3790c09emsh7fe8df33e6a595ap15261ejsnabfbe3cc0785',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }), []);

    const {dispatch} = useContext(NutritionContext);

    useEffect(() => {
        fetchFoodsData(urls, options, dispatch).then();
    }, [urls, options, dispatch]);


    return (
        <>
            <Navbar/>
            <ExtraText/>
            <Box display="flex" flexDirection={{base: "column", md: "row"}} alignItems="center"
                 justifyContent="space-between" width="100%" overflow="hidden" p={5}>
                <Box width={{base: "100%", md: "40%"}}>
                    <FoodForm/>
                </Box>
                <Box width={{base: "100%", md: "50%"}} mt={{base: 4, md: 0}}>
                    <Video/>
                </Box>
            </Box>
            <Recipes/>
        </>
    )
}

export default FoodsHealth;