import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.tsx'
import About from "./components/About.tsx";
import ProjectPage from "./components/ProjectPage.tsx";
import { UltraGangster2D } from "./components/IndividualProjects.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<ProjectPage/>} />
                <Route path="/projects/Ultra Gangster: A Twin Stick Shooter Game" element={<UltraGangster2D/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;