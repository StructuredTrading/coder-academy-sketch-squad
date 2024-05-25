import { Link } from "react-router-dom";


export default function HomePage() {

    return <>
        <h1>
            Sketch Squad!
        </h1>

        <Link to={"/GamePage"}>Start Game</Link>
        <Link to={"/AboutPage"}>About</Link>
    </>

}