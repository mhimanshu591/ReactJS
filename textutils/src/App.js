// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      {/* <Navbar title="8556" aboutText="ye about text ex hai"/> */}
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container my-3">
          {/* <About /> */}
          <Switch>
            <Route exact path="/">
              <TextForm heading="Please enter text to analyze" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
