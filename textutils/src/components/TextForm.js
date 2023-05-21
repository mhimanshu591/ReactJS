import React from "react";

import { useState } from "react";

export default function TextForm(props) {


    const handleMailClick=()=>{

        console.log("Mail Click was Clicked");
        if (text.endsWith("@gmail.com")){
        setText("Yes!");
        }
        else{
            setText("No!");
 
        }
    }
    




const handleUpClick=()=>{

    console.log("Upper Case was Clicked");
    setText(text.toUpperCase())
}

const handleLoClick=()=>{

    console.log("Upper Case was Clicked");
    setText(text.toLowerCase())
}


const handleClearClick=()=>{

    console.log("Clear was Clicked");
    setText("")
}




const handleOnChange=(event)=>{

console.log("On Change");
setText(event.target.value)

}






const [text, setText]= useState("")


  return (
    <>
    <div>
      <form>
        <div className="form-group" style={{color:  props.mode === 'dark'? 'grey':'light'}}
>
            <h3>{props.heading}</h3>
          <textarea
            style={{backgroundColor:  props.mode === 'dark'? 'grey':'light'}}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8" value={text} onChange={handleOnChange}
          ></textarea>
        </div>

      </form>
      <button className="btn btn-primary my-1 mx-1"  onClick={handleUpClick} >Convert to uppercase</button>
      <button className="btn btn-primary my-1 mx-1"  onClick={handleLoClick} >Convert to lowercase</button>
      <button className="btn btn-primary my-1 mx-1"  onClick={handleClearClick} >Clear</button>
      <button className="btn btn-primary my-1 mx-1"  onClick={handleMailClick} >Mail Check</button>

    </div>
    <div className="container my-3"  style={{color:  props.mode === 'dark'? 'white':'#001126'}}>

        <h2>Text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>Average Reading Time :  {0.008 * text.split(" ").length} minutes </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Please Write something for Preview"}</p>

    </div>

    </>
  );
}
