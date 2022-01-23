import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("")
    const uppercaseClick = () => {
        setText(text.toUpperCase())
    }
    const lowercaseClick = () => {
        setText(text.toLowerCase())
    }
    const clearClick = () => {
        setText('')
    }
    const onChangeText = (event) => {
        setText(event.target.value)
    }
    const darkStyle = {
        color: 'white',
        backgroundColor: 'rgb(73 76 118)'
    }
    const lightStyle = {
        color: 'rgb(73 76 118)',
        backgroundColor: 'white'
    }
    return (
        <>
            <div className="mb-3">
                <h3 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{props.heading}</h3>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={onChangeText} rows="7" placeholder={props.placeholder} style={props.mode === 'dark' ? darkStyle : lightStyle }></textarea>
                <button type="button" className="btn btn-primary mt-2 mx-1" onClick={uppercaseClick}>Convert Uppercase</button>
                <button type="button" className="btn btn-primary mt-2 mx-1" onClick={lowercaseClick}>Convert Lowercase</button>
                <button type="button" className="btn btn-primary mt-2 mx-1" onClick={clearClick}>Clear Text</button>
            </div>
            <div className="mb-3">
                <h4 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your text summary</h4>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text.split(' ').length} words and {text.length} characters</p>
                <h6 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Text Preview</h6>
                <p className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>{text}</p>
            </div>
        </>
    );
}

TextForm.defaultProps = {
    heading: PropTypes.string.isRequired,
    placeholder: PropTypes.string
}
