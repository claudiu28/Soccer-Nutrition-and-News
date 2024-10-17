import { useContext } from "react";
import { SoccerContext } from "../../Provider/SoccerProvider.jsx";
import PropTypes from "prop-types";
import {Select, Box} from "@chakra-ui/react";

const SeasonsFootball = ({handleChangeSeason }) => {
    const { stateSoccer } = useContext(SoccerContext);

    if (!stateSoccer.season || !Array.isArray(stateSoccer.season)) {
        return <p>No seasons available</p>;
    }

    const {season} = stateSoccer;
    return (
        <Box>
            <Select placeholder="Select season..." onChange={handleChangeSeason}>
                {season.map((season, index) => (
                    <option key={index} value={season}>
                        {season}
                    </option>
                ))}
            </Select>
        </Box>

    );
};

SeasonsFootball.propTypes = {
    handleChangeSeason: PropTypes.func.isRequired,
};

export default SeasonsFootball;
