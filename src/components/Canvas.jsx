import { useEffect, useRef, useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../styles/Canvas.css";
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";
import getRandomPrompt from "../functions/DrawingPrompts";
import Timer from "./Timer";

export default function Canvas() {
    const canvasRef = useRef(null);
    const [eraseMode, setEraseMode] = useState(false);
    const [strokeWidth, setStrokeWidth] = useState(5);
    const [eraserWidth, setEraserWidth] = useState(10);
    const [strokeColor, setStrokeColor] = useState("#000000");
    const [canvasColor, setCanvasColor] = useState("#ffffff");

    const [prompt, setPrompt] = useState({ category: '', word: '' });

    useEffect(() => {
        const newPrompt = getRandomPrompt();
        setPrompt(newPrompt);
    }, []);

    const handleTimeUp = () => {
        alert('Time is up!');
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
        <div class="canvas-container">
            <div class="tools">
                <h1>Tools</h1>
                <DarkModeToggleButton />
                <div class="draw-erase">
                    <button type="button" class="pen-button" disabled={!eraseMode} onClick={handlePenClick}>Pen</button>
                    <button type="button" class="eraser-button" disabled={eraseMode} onClick={handleEraserClick}>Eraser</button>
                </div>
                <div class="adjustable-sliders">
                    <div class="pen-stroke-width">
                        <label htmlFor="strokeWidth" class="stroke-width">Pen width</label>
                        <input disabled={eraseMode} type="range" class="form-range" min="1" max="20" step="1" id="strokeWidth" value={strokeWidth} onChange={handleStrokeWidthChange} />
                    </div>
                    <div class="eraser-stroke-width">
                        <label htmlFor="eraserWidth" class="eraser-width">Eraser width</label>
                        <input disabled={!eraseMode} type="range" className="form-range" min="1" max="20" step="1" id="eraserWidth" value={eraserWidth} onChange={handleEraserWidthChange} />
                    </div>
                </div>
                <div class="colour-options">
                    <div class="pen-colour">
                        <label htmlFor="strokeColor">Pen colour</label>
                        <input type="color" value={strokeColor} onChange={handleStrokeColorChange} />
                    </div>
                    <div class="canvas-colour">
                        <label htmlFor="canvasColor">Canvas colour</label>
                        <input type="color" value={canvasColor} onChange={handleCanvasColorChange} />
                    </div>
                </div>
                <div class="quick-action-buttons">
                    <button type="button" class="undo-button" onClick={handleUndoClick}>Undo</button>
                    <button type="button" class="redo-button" onClick={handleRedoClick}>Redo</button>
                    <button type="button" class="clear-button" onClick={handleClearClick}>Clear</button>
                    <button type="button" class="reset-button" onClick={handleResetClick}>Reset</button>
                </div>
                <div>
                    <h1>Draw this word: {prompt.word}</h1>
                    <p>Category: {prompt.category}</p>
                </div>
                <div>
                    <h1>Timer Example</h1>
                    <Timer initialSeconds={30} onTimeUp={handleTimeUp} />
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
