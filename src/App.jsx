import { Route, Routes } from "react-router-dom";
import Template from "./pages/_TemplatePage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GamePage from "./pages/GamePage";
import ResultsPage from "./pages/ResultsPage";
import GameLobby from "./pages/GameLobby";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Template />} >
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="play" element={<GamePage />} />
            <Route path="game/results" element={<ResultsPage />} />
            <Route path="lobby" element={<GameLobby />} />
        </Route>
    </Routes>
  );
}

export default App;
