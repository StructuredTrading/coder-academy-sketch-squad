import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../styles/Canvas.css";
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";
import getRandomPrompt from "../functions/DrawingPrompts";
import Countdown from "./Countdown";
import Timer from "./Timer";
import AfterGameCountdown from "./AfterGameCountdown"; // Update the import path

export default function Canvas() {
    const canvasRef = useRef(null);
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [eraserWidth, setEraserWidth] = useState(10);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [canvasColor, setCanvasColor] = useState("#ffffff");
    const [prompt, setPrompt] = useState({ category: '', word: '' });
    const [timerKey, setTimerKey] = useState(0); // To force re-render the timer
    const [countdownComplete, setCountdownComplete] = useState(false);
    const [showAfterGameCountdown, setShowAfterGameCountdown] = useState(false); // New state for AfterGameCountdown

    useEffect(() => {
        const newPrompt = getRandomPrompt();
        setPrompt(newPrompt);
    }, []);

    const handleTimeUp = () => {
        setShowAfterGameCountdown(true); // Show AfterGameCountdown when time is up
    };

    const handleCountdownComplete = () => {
        setCountdownComplete(true);
    };

    const handleAfterGameCountdownEnd = () => {
        const newPrompt = getRandomPrompt();
        setPrompt(newPrompt);
        canvasRef.current.clearCanvas(); // Clear the canvas
        setTimerKey(prevKey => prevKey + 1); // Reset the timer
        setCountdownComplete(false); // Restart the countdown
        setShowAfterGameCountdown(false); // Hide AfterGameCountdown
    };

    const handleEraserClick = () => {
        setEraseMode(true);
        canvasRef.current.eraseMode(true);
    };

    const handlePenClick = () => {
        setEraseMode(false);
        canvasRef.current.eraseMode(false);
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

    const handleResetClick = () => {
        canvasRef.current.resetCanvas();
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
        <div className="canvas-container">
            <div className="tools">
                <h1>Tools</h1>
                <DarkModeToggleButton />
                <div className="draw-erase">
                    <button type="button" className="pen-button" disabled={!eraseMode} onClick={handlePenClick}>Pen</button>
                    <button type="button" className="eraser-button" disabled={eraseMode} onClick={handleEraserClick}>Eraser</button>
                </div>
                <div className="adjustable-sliders">
                    <div className="pen-stroke-width">
                        <label htmlFor="strokeWidth" className="stroke-width">Pen width</label>
                        <input disabled={eraseMode} type="range" className="form-range" min="1" max="20" step="1" id="strokeWidth" value={strokeWidth} onChange={handleStrokeWidthChange} />
                    </div>
                    <div className="eraser-stroke-width">
                        <label htmlFor="eraserWidth" className="eraser-width">Eraser width</label>
                        <input disabled={!eraseMode} type="range" className="form-range" min="1" max="20" step="1" id="eraserWidth" value={eraserWidth} onChange={handleEraserWidthChange} />
                    </div>
                </div>
                <div className="colour-options">
                    <div className="pen-colour">
                        <label htmlFor="strokeColor">Pen colour</label>
                        <input type="color" value={strokeColor} onChange={handleStrokeColorChange} />
                    </div>
                    <div className="canvas-colour">
                        <label htmlFor="canvasColor">Canvas colour</label>
                        <input type="color" value={canvasColor} onChange={handleCanvasColorChange} />
                    </div>
                </div>
                <div className="quick-action-buttons">
                    <button type="button" className="undo-button" onClick={handleUndoClick}>Undo</button>
                    <button type="button" className="redo-button" onClick={handleRedoClick}>Redo</button>
                    <button type="button" className="clear-button" onClick={handleClearClick}>Clear</button>
                    <button type="button" className="reset-button" onClick={handleResetClick}>Reset</button>
                </div>
                <div>
                    <h1>Draw this word: {prompt.word}</h1>
                    <p>Category: {prompt.category}</p>
                </div>
                <div>
                    <h1>Timer Example</h1>
                    {!countdownComplete && !showAfterGameCountdown ? (
                        <Countdown onCountdownComplete={handleCountdownComplete} />
                    ) : showAfterGameCountdown ? (
                        <AfterGameCountdown onCountdownEnd={handleAfterGameCountdownEnd} />
                    ) : (
                        <Timer key={timerKey} initialSeconds={30} onTimeUp={handleTimeUp} />
                    )}
                </div>
            </div>
            <ReactSketchCanvas
                ref={canvasRef}
                strokeWidth={strokeWidth}
                eraserWidth={eraserWidth}
                strokeColor={strokeColor}
                canvasColor={canvasColor}
                className="custom-canvas"
            />
        </div>
    );
}
