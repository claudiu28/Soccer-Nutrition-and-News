import FoodProvider from "../Provider/FoodProvider.jsx";
import {ChakraProvider} from "@chakra-ui/react";
import FoodsHealth from "./MainComponents/FoodsHealth.jsx";
const Foods = () => {
    return (
        <>
            <FoodProvider>
                <ChakraProvider>
                    <FoodsHealth/>
                </ChakraProvider>
            </FoodProvider>
        </>
    )
};
export default Foods;