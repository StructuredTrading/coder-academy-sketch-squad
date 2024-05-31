import React from 'react';
import { DarkModeToggleButton } from "./DarkModeToggleButton";
import Timer from "./Timer";

export default function ToolPanel({
    eraseMode,
    handlePenClick,
    handleEraserClick,
    strokeWidth,
    handleStrokeWidthChange,
    eraserWidth,
    handleEraserWidthChange,
    strokeColor,
    handleStrokeColorChange,
    canvasColor,
    handleCanvasColorChange,
    handleUndoClick,
    handleRedoClick,
    handleClearClick,
    handleResetClick,
    prompt,
    handleTimeUp
}) {
    return (
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
                <Timer initialSeconds={30} onTimeUp={handleTimeUp} />
            </div>
        </div>
    );
}
