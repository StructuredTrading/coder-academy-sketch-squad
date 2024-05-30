import { Link } from "react-router-dom";
import Logo from '../components/Logo.jsx'; 
import '../styles/HomePage.css';
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";


export default function HomePage() {

    return <>
        <main>
            <Logo />
            <nav>
                <Link to={"/play"}>Start Game</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/lobby"}>Find Game</Link>
                <DarkModeToggleButton />
            </nav>
        </main>
    </>

}