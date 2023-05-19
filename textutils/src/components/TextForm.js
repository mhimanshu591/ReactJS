import React from "react";

import { useState } from "react";

export default function TextForm(props) {

const handleUpClick=()=>{

    console.log("Upper Case was Clicked");
    setText(text.toUpperCase())
}

const handleLoClick=()=>{

    console.log("Upper Case was Clicked");
    setText(text.toLowerCase())
}


const handleOnChange=(event)=>{

console.log("On Change");
setText(event.target.value)

}

const [text, setText]= useState("Enter text here")


  return (
    <>
    <div>
      <form>
        <div className="form-group">
            <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8" value={text} onChange={handleOnChange}
          ></textarea>
        </div>

      </form>
      <button className="btn btn-primary my-3"  onClick={handleUpClick} >Convert to uppercase</button>
      <button className="btn btn-primary"  onClick={handleLoClick} >Convert to lowercase</button>

    </div>
    <div className="container my-3">

        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>Average Reading Time :  {0.008 * text.split(" ").length} minutes </p>
        <h3>Preview</h3>
        <p>{text}</p>

    </div>

    </>
  );
}
