import { Link } from "react-router-dom";
import logo from '../images/logo.png';


export default function HomePage() {

    return <>
        <main>
            <img src={logo} alt="sketch off logo" />
            <nav>
                <Link to={"/GamePage"}>Start Game</Link>
                <Link to={"/AboutPage"}>About</Link>
            </nav>
        </main>
    </>

}