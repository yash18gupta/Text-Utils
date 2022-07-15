import React, { useState } from 'react';

export default function TextForms(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick = () => {
      let newText = '';
      setText(newText);
      props.showAlert("Cleared text!","success");
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra space removed!","success");
    }
    // const handleBold =() =>{
    //   var element = document.getElementById("myBox");
    //   if(element.style.fontWeight === "bold"){
    //     element.style.fontWeight = "normal";
    //   }
    //   else{
    //     element.style.fontWeight = "bold";
    //   }
    //   props.showAlert("Converted to bold text!","success");
    // }
    const handleCopy = () =>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copied text!","success");
    }
    const speaktext =() => {
      var speech = new SpeechSynthesisUtterance();
      speech.lang = "en-GB";
      speech.text = text;
      speech.volume = 12;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
      props.showAlert("Text to Speech!","success");
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
        <div className="mb-3" >
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'? '#7b92a9': 'white', color:props.mode=== 'dark'?'white': 'black'}}></textarea>
        </div>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={handleUpClick}>Convert toUppercase</button>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={handleLoClick}>Convert toLowercase</button>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={handleCopy}>Copy</button>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={handleExtraSpaces}>Remove space</button>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={speaktext}>speak</button>
          <button disabled={text.length===0} className="btn btn-large btn-primary mx-1 col-lg-1.75 " onClick={handleClearClick}>Clear text</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2 >Your text summary: </h2>
      <p >{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} charcters</p>
      <p >{text.trim().length === 0 ? 0:0.008 * text.trim().split(/\s+/).length} Minutes required to read</p>
      <h2 >Preview</h2>
      <p >{text}</p>
    </div>
    </>
  )
}