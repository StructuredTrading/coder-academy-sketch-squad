import { useDarkModeData, useDarkModeDispatch } from "../contexts/darkModeContext";
import playButtonSound from "../utils/playSound";

export function DarkModeToggleButton(){

	let darkModeData = useDarkModeData();
	let darkModeDispatch = useDarkModeDispatch();

	return(
		<button onClick={() => {
			darkModeDispatch(!darkModeData);
			playButtonSound();
			}}>
			Toggle Theme
		</button>
	)
}