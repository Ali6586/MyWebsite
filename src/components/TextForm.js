import React, { useState } from 'react'

export default function TextForm(props) {
    const [Text, setText] = useState('Hello')


    const handleUpClick = () => {
        console.log('UpperCase Clicked' + Text);
        let newtext = Text.toUpperCase();
        if (newtext === "") {
            props.showAlert('Enter Text to Convert', 'danger');
        }
        else {
            setText(newtext);
            props.showAlert('Converted to UpperCase', 'success');
        }
    }


    const handleOnChange = (e) => {
        console.log("OnChange Clicked");
        setText(e.target.value)
    }
    const handleLoClick = () => {
        console.log('LowerCase Clicked' + Text);
        let newtext = Text.toLowerCase();
        if (newtext === "") {
            props.showAlert('Enter Text to Convert', 'danger');
        }
        else{
        setText(newtext);
        props.showAlert('Converted to LowerCase', 'success');
    }
}
    const handleClearClick = () => {
        console.log('Clear Clicked ' + Text);
        if(Text === ""){
            props.showAlert('Enter Text to Clear', 'danger');
        }
        else{
        setText('');
        props.showAlert('Text Cleared', 'success');
    }
}
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        if(text.value === ""){
            props.showAlert('Enter Text to Copy', 'danger');
        }
        else{
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text Copied', 'success');
    }
}
    const handleExtraSpaces = () => {
        if(Text === ""){
            props.showAlert('Enter Text to Remove Extra Spaces', 'danger');
        }
        else{
        let newText = Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra Spaces Removed', 'success');
    }
}
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleUpClick} className="btn btn-primary mx-1">Convert to UpperCase</button>
                <button onClick={handleLoClick} className="btn btn-primary mx-1">Convert to LowerCase</button>
                <button onClick={handleClearClick} className="btn btn-primary mx-1">Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").length} words and {Text.length} characters</p>
                <p>{0.008 * Text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length > 0 ? Text : "Enter something to Preview"}</p>
            </div>
        </>
    )
}
