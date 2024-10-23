import {createContext, useReducer} from "react";
import FoodReducer from "../Reducer/FoodReducer.js";
import PropTypes from "prop-types";

export const NutritionContext = createContext(undefined);
const NutritionProvider = ({children}) => {
    const init = {
        recipes: [],
        ingredients: [],
        errors: null,
    }
    const initialize = (init) => {
        return init;
    }

    const [stateNutrition, dispatch] = useReducer(FoodReducer, init, initialize);
    return (
        <>
            <NutritionContext.Provider value={{stateNutrition, dispatch}}>
                {children}
            </NutritionContext.Provider>
        </>
    )
}
NutritionProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default NutritionProvider;