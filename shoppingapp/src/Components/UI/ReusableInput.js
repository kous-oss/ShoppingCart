import React from 'react';
import './ReUsableInput.css';

const ReusableInput = React.forwardRef((props,ref) => {
    return (
        <div className='input'>
            <label className='label' htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default ReusableInput;