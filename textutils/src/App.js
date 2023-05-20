// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
{/* <Navbar title="8556" aboutText="ye about text ex hai"/> */}

<Navbar title="TextUtils" aboutText="About Us"/> 
<div className="container my-3">

<TextForm heading="Please enter text to analyse"/>
{/* <About /> */}
</div>




    </>
  );
}

export default App;
