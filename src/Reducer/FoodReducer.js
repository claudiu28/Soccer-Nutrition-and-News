const FoodReducer = (state, action) => {
    switch (action.type) {
        case "SEARCH_RECIPE": {
            return {...state, recipes: action.result};
        }
        case "ERROR_FOODS": {
            return {...state, errors: action.result};
        }
        default:
            return state;
    }
}

export default FoodReducer;