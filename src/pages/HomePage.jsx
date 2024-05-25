import { Link } from "react-router-dom";
import Logo from '../components/Logo.jsx'; 
import '../styles/HomePage.css';


export default function HomePage() {

    return <>
        <main>
            <Logo />
            <nav>
                <Link to={"/GamePage"}>Start Game</Link>
                <Link to={"/AboutPage"}>About</Link>
            </nav>
        </main>
    </>

}