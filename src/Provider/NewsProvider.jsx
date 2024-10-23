import {createContext, useReducer} from "react";
import NewsReducer from "../Reducer/NewsReducer.js";
import PropTypes from "prop-types";

export const NewsContext = createContext(undefined);

const NewsProvider = ({children}) => {

    const init = {
        info: [],
        multipleInfo: [],
        errors: null,
    }

    const reducerInit = (init) => {
        return init;
    }
    const [newsState, dispatch] = useReducer(NewsReducer, init, reducerInit);

    return (
        <NewsContext.Provider value={{newsState, dispatch}}>
            {children}
        </NewsContext.Provider>
    );
}

NewsProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
export default NewsProvider;