import { Link } from "react-router-dom";
import Logo from '../components/Logo.jsx'; 
import '../styles/HomePage.css';
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";
import { playButtonSound, playButtonHoverSound } from '../utils/playSound.js';


export default function HomePage() {

    return <>
        <main>
            <Logo />
            <nav>
                <Link to={"/play"} onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>Start Game</Link>
                <Link to={"/about"} onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>About</Link>
                <Link to={"/lobby"} onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>Find Game</Link>
                <DarkModeToggleButton />
            </nav>
        </main>
    </>

}