import { Link } from "react-router-dom";
import logo from '../images/logo.png';
import '../styles/HomePage.css';


export default function HomePage() {

    return <>
        <main>
            <img src={logo} alt="sketch off logo" />
            <nav>
                <Link to={"/play"}>Start Game</Link>
                <Link to={"/about"}>About</Link>
            </nav>
        </main>
    </>

}