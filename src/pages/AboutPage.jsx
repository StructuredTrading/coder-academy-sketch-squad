import { Link } from "react-router-dom";
import '../styles/AboutPage.css'; 
import '../styles/index.css';
import { playButtonSound, playButtonHoverSound } from "../utils/playSound.js";

export default function AboutPage() {
    return (
        <div className="page-container">
            <div class="main-content">
                <section>
                    <h1>About Sketch Off</h1>
                    <p>Sketch Off was developed as part of a hackathon project at Coder Academy. Initially envisioned as a game, it has evolved into a versatile sketchpad app. This project showcases not only our technical skills but also our capacity to innovate and adapt under pressure.</p>
                </section>
                <section>
                    <h2>Developers</h2>
                    <h3>Team Sketch Squad</h3>
                    <p>At every step of development, our team collaborated closely, ensuring a seamless integration of design and functionality. Lucy took the lead on design aspects while Sam handled the technical implementation of components and APIs.</p>
                </section>
                <section>
                    <h3>Our Journey</h3>
                    <p>We, the Sketch Squad, entered the hackathon with enthusiasm to create a product that was both entertaining and practical. Although we initially aimed to develop a game, constraints and challenges redirected our efforts toward creating Sketch Off—a sketchpad app. This pivot not only enriched our learning experience but also opened up possibilities for future enhancements.</p>
                </section>
                <section>
                    <h3>Looking Ahead</h3>
                    <p>Currently functioning as a sketchpad app, Sketch Off has the potential for more. We are excited about the possibility of expanding its features and capabilities. Stay tuned for updates and new developments!</p>
                </section>
                <section>
                    <h3>Explore More</h3>
                    <p>Interested in seeing more about how Sketch Off was built or want to connect with us? Check out our resources below:</p>
                </section>
                <a href="https://github.com/StructuredTrading/coder-academy-sketch-squad">View the GitHub Repo</a>
            </div>
            <footer>
                <Link to="/" onClick={playButtonSound} onMouseEnter={playButtonHoverSound}>Go home</Link>
            </footer>
        </div>
    );
}
