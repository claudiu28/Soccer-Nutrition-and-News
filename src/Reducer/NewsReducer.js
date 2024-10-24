
const NewsReducer = (state, action) => {
    switch (action.type) {
        case "NEWS_M_INFO":{
            return {...state, multipleInfo: action.result};
        }
        case "ERROR_NEWS":{
            return {...state,errors: action.result};
        }
        default:
            return state;
    }
}

export default NewsReducer;