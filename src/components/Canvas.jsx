import { useRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import "../styles/Canvas.css";
import { DarkModeToggleButton } from "../components/DarkModeToggleButton";
import { forwardRef, useImperativeHandle } from "react";
import { playButtonSound, playButtonHoverSound } from '../utils/playSound.js';

const Canvas = forwardRef(({ strokeWidth, eraserWidth, strokeColor, canvasColor, setEraseMode, eraseMode, handleClearClick, handleUndoClick, handleRedoClick, handlePenClick, handleEraserClick, handleStrokeWidthChange, handleEraserWidthChange, handleStrokeColorChange, handleCanvasColorChange }, ref) => {
    const canvasRef = useRef(null);

    useImperativeHandle(ref, () => ({
        clearCanvas: () => canvasRef.current.clearCanvas(),
        undo: () => canvasRef.current.undo(),
        redo: () => canvasRef.current.redo(),
        eraseMode: (mode) => canvasRef.current.eraseMode(mode),
    }));

    return (
        <div className="canvas-container">
            <div className="tools">
                <h1>Tools</h1>
                <DarkModeToggleButton />
                <div className="draw-erase">

                    <button type="button" className="pen-button" disabled={!eraseMode} onClick={(e) => {
                        handlePenClick(); 
                        playButtonSound();
                    }} onMouseEnter={playButtonHoverSound}>Pen</button>

                    <button type="button" className="eraser-button" disabled={eraseMode} onClick={(e) => {
                        handleEraserClick();
                        playButtonSound();
                    }} onMouseEnter={playButtonHoverSound}>Eraser</button>

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
                        <input type="color" value={strokeColor} onChange={(e) => {
                            handleStrokeColorChange(e);
                            playButtonSound();
                        }} onMouseEnter={playButtonHoverSound} />
                    </div>
                    <div className="canvas-colour">
                        <label htmlFor="canvasColor">Canvas colour</label>
                        <input type="color" value={canvasColor} onChange={(e) => {
                            handleCanvasColorChange(e);
                            playButtonSound();
                        }} onMouseEnter={playButtonHoverSound} />
                    </div>
                </div>
                <div className="quick-action-buttons">
                    <button type="button" className="undo-button" onClick={(e) => {
                        handleUndoClick();
                        playButtonSound();
                    }} onMouseEnter={playButtonHoverSound}>Undo</button>
                    <button type="button" className="redo-button" onClick={(e) => {
                        handleRedoClick();
                        playButtonSound();
                    }} onMouseEnter={playButtonHoverSound}>Redo</button>
                    <button type="button" className="clear-button" onClick={(e) => {
                        handleClearClick();
                        playButtonSound();
                    }} onMouseEnter={playButtonHoverSound}>Clear</button>
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
});

export default Canvas;
