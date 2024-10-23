import SoccerProvider from "../Provider/SoccerProvider.jsx";
import DataFootball from "./MainComponents/Sports.jsx";
import {ChakraProvider} from "@chakra-ui/react";

const DSoccer = () => {
    return (
        <>
            <SoccerProvider>
                <ChakraProvider>
                    <DataFootball/>
                </ChakraProvider>
            </SoccerProvider>
        </>)
}
export default DSoccer;