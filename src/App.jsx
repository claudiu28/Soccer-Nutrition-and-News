import Home from "./Components/Home.jsx";
import {Route, Routes} from "react-router-dom";
import DSoccer from "./Components/DSoccer.jsx";
import Foods from "./Components/Nutritions.jsx";
import DNews from "./Components/DNews.jsx";
import About from "./Components/About.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sport" element={<DSoccer/>}></Route>
                <Route path="/nutrition" element={<Foods/>}></Route>
                <Route path="/news" element={<DNews/>}></Route>
                <Route path="/about" element={<About/>}></Route>
            </Routes>
        </>
    )
}

export default App;
