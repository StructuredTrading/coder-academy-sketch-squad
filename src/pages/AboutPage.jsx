import { Link } from "react-router-dom";
import Logo from '../components/Logo.jsx';
import '../styles/AboutPage.css'; 
import { playButtonSound, playButtonHoverSound } from "../utils/playSound.js";

export default function AboutPage() {

    return <>
        <div class="page-container">
            <Logo />
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus natus aliquam in cupiditate, fuga harum eaque aperiam sapiente ducimus soluta provident repellat quaerat minus at veniam minima? Provident laboriosam id culpa consequuntur fugiat, beatae corporis tempora odio nesciunt, repellat, similique esse delectus possimus nam aliquid rerum. Eum nemo expedita quisquam.</p>
            <Link to={"/"} onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>Go home</Link>
        </div>
    </>
    
}