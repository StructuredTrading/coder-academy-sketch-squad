import { Link } from "react-router-dom";
import Logo from '../components/Logo.jsx'; 
import '../styles/HomePage.css';
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";
import playButtonSound from '../utils/playSound.js';


export default function HomePage() {

    return <>
        <main>
            <Logo />
            <nav>
                <Link to={"/play"} onClick={playButtonSound}>Start Game</Link>
                <Link to={"/about"} onClick={playButtonSound}>About</Link>
                <Link to={"/lobby"} onClick={playButtonSound}>Find Game</Link>
                <DarkModeToggleButton />
            </nav>
        </main>
    </>

}