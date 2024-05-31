import { Link } from "react-router-dom";
import { playButtonSound, playButtonHoverSound } from "../utils/playSound.js";

export default function GameLobby() {

    return(
        <div>
            <div className="lobbyHeader">
                <h1>Multiplayer Coming Soon!</h1>
            </div>
            <footer>
                <Link to="/" onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>Go home</Link>
            </footer>
        </div>
    )
}