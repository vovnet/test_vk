import React from 'react';

const TestingInput = (props) => {
    return (
        <div className={props.hasErrors ? "testing-input bad-result" : "testing-input"}>
            {props.text}
        </div>
    );
}

export default TestingInput;