// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
{/* <Navbar title="8556" aboutText="ye about text ex hai"/> */}

<Navbar /> 
<div className="container my-3">

<TextForm heading="Please enter text to analyse"/>

</div>
    </>
  );
}

export default App;
