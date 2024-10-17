import {useContext, useEffect, useMemo} from "react";
import {NutritionContext} from "../../Provider/FoodProvider.jsx";
import {fetchFoodsData, fetchIncExp} from "../../API/fetchFunctions.js";
import Recipes from "../Health/Recipes.jsx";
import Navbar from "../Navbar.jsx";
import Ingredient from "../Health/GIngredient.jsx";
import FoodForm from "../Health/FoodForm.jsx";
import ExtraText from "../Health/ExtraText.jsx";
import Video from "../Health/VideoNutritions.jsx";


const FoodsHealth = () => {

    const urls = useMemo(() => ({
        urls1 : "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=side%20salad&diet=vegetarian&intolerances=gluten&includeIngredients=cheese%2Cnuts&excludeIngredients=eggs&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&addRecipeInstructions=false&addRecipeNutrition=false&maxReadyTime=45&ignorePantry=true&sort=max-used-ingredients&offset=0&number=10",
        urls2: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100&minCalories=0&query=snickers&offset=0&number=10",
    }),[]);

    const options = useMemo(()=> ({
        method: 'GET',
        headers: {
            'x-rapidapi-key': '7d3790c09emsh7fe8df33e6a595ap15261ejsnabfbe3cc0785',
            'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
    }),[]);

    const {dispatch} = useContext(NutritionContext);

    useEffect(() => {
        fetchFoodsData(urls,options,dispatch).then();
    }, [urls,options,dispatch]);

    useEffect(() => {
        fetchIncExp(urls,options,dispatch).then();
    }, [urls,options,dispatch]);

    return (
        <>
            <Navbar/>
            <Recipes/>
            <Ingredient/>
            <ExtraText/>
            <Video/>
            <FoodForm/>
        </>
    )
}

export default FoodsHealth;