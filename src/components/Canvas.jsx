import { ReactSketchCanvas } from 'react-sketch-canvas';

export default function Canvas() {

    const styles = {
        border: '0.0625rem solid #9c9c9c',
        borderRadius: '0.25rem',
    };

    return (
        <>
            <ReactSketchCanvas
                style={styles}
                width="600"
                height="400"
                strokeWidth={4}
                strokeColor="red"
            />
        </>
    )
};