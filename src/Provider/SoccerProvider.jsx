import {createContext, useReducer} from "react";
import ReducerSoccer from "../Reducer/SoccerReducer.js";
import PropTypes from "prop-types";

export const SoccerContext = createContext(undefined);

const SoccerProvider = ({children}) => {
    const init = {
        season: [],
        statistics: [],
        teams: [],
        leagues: [],
        players: [],
        error: null,
    };
    const initialize = (init) => {
        return init;
    }
    const [stateSoccer, dispatch] = useReducer(ReducerSoccer, init, initialize);
    return (
      <SoccerContext.Provider value={{stateSoccer,dispatch}}>
          {children}
      </SoccerContext.Provider>
    );
}

SoccerProvider.propTypes = {
    children : PropTypes.node.isRequired,
}
export default SoccerProvider;