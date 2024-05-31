import { useDarkModeData, useDarkModeDispatch } from "../contexts/darkModeContext";
import { playButtonSound, playButtonHoverSound } from "../utils/playSound";

export function DarkModeToggleButton(){

	let darkModeData = useDarkModeData();
	let darkModeDispatch = useDarkModeDispatch();

	return(
		<button onClick={() => {
			darkModeDispatch(!darkModeData);
			playButtonSound();
			}} onMouseEnter={playButtonHoverSound}>
			Toggle Theme
		</button>
	)
}