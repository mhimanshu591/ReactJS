import React from "react";

import { useState } from "react";

export default function TextForm(props) {

const handleUpClick=()=>{

    console.log("Upper Case was Clicked");
    setText(text.toUpperCase())
}

const handleOnChange=(event)=>{

console.log("On Change");
setText(event.target.value)

}

const [text, setText]= useState("Enter text here")


  return (
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
      <button className="btn btn-primary"  onClick={handleUpClick} >Convert to uppercase</button>

    </div>
  );
}
