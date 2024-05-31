import { useState, useRef } from "react";
import "../styles/GamePage.css";
import Canvas from "../components/Canvas";
import Countdown from "../components/Countdown";
import Timer from "../components/Timer";
import AfterGameCountdown from "../components/AfterGameCountdown";
import DrawingPrompt from "../components/DrawingPrompt"; // Import DrawingPrompt component

export default function GamePage() {
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [eraserWidth, setEraserWidth] = useState(10);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [canvasColor, setCanvasColor] = useState("#ffffff");
    const [timerKey, setTimerKey] = useState(0); // To force re-render the timer
    const [countdownComplete, setCountdownComplete] = useState(false);
    const [showAfterGameCountdown, setShowAfterGameCountdown] = useState(false); // New state for AfterGameCountdown

    const canvasRef = useRef(null); // Reference to the canvas component

    const handleTimeUp = () => {
        setShowAfterGameCountdown(true); // Show AfterGameCountdown when time is up
    };

    const handleCountdownComplete = () => {
        setCountdownComplete(true);
    };

    const handleAfterGameCountdownEnd = async () => {
        canvasRef.current.clearCanvas(); // Clear the canvas
        setTimerKey(prevKey => prevKey + 1); // Reset the timer
        setCountdownComplete(false); // Restart the countdown
        setShowAfterGameCountdown(false); // Hide AfterGameCountdown
    };

    const handleEraserClick = () => {
        setEraseMode(true);
    };

    const handlePenClick = () => {
        setEraseMode(false);
    };

    const handleUndoClick = () => {
        canvasRef.current.undo();
    };

    const handleRedoClick = () => {
        canvasRef.current.redo();
    };

    const handleClearClick = () => {
        canvasRef.current.clearCanvas();
    };

    const handleStrokeWidthChange = (event) => {
        setStrokeWidth(+event.target.value);
    };

    const handleEraserWidthChange = (event) => {
        setEraserWidth(+event.target.value);
    };

    const handleStrokeColorChange = (event) => {
        setStrokeColor(event.target.value);
    };

    const handleCanvasColorChange = (event) => {
        setCanvasColor(event.target.value);
    };

    return (
        <main>
            <div className="game-controls">
                <DrawingPrompt /> {/* Use DrawingPrompt component */}
                <div>
                    <h1>Timer</h1>
                    {!countdownComplete && !showAfterGameCountdown ? (
                        <Countdown onCountdownComplete={handleCountdownComplete} />
                    ) : showAfterGameCountdown ? (
                        <AfterGameCountdown onCountdownEnd={handleAfterGameCountdownEnd} />
                    ) : (
                        <Timer key={timerKey} initialSeconds={30} onTimeUp={handleTimeUp} />
                    )}
                </div>
            </div>
            <Canvas
                ref={canvasRef}
                strokeWidth={strokeWidth}
                eraserWidth={eraserWidth}
                strokeColor={strokeColor}
                canvasColor={canvasColor}
                setEraseMode={setEraseMode}
                eraseMode={eraseMode}
                handleClearClick={handleClearClick}
                handleUndoClick={handleUndoClick}
                handleRedoClick={handleRedoClick}
                handlePenClick={handlePenClick}
                handleEraserClick={handleEraserClick}
                handleStrokeWidthChange={handleStrokeWidthChange}
                handleEraserWidthChange={handleEraserWidthChange}
                handleStrokeColorChange={handleStrokeColorChange}
                handleCanvasColorChange={handleCanvasColorChange}
            />
        </main>
    );
}