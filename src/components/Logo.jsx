import logo from '../images/logo.png';
import '../styles/Logo.css';


export default function Logo() {
    return (
        <div className="logo-container">
            <img src={logo} alt="Sketch Off Logo" className="logo" />
        </div>
    );
}