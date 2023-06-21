import Home from "./component/home.js/Home";
import { Fragment } from "react";
import './App.css';
import Navbar from "./component/Navbar/Navbar.js";

function App() {
    return(
        <Fragment>
            <Navbar/>
            <Home/>
        </Fragment>
    );
}

export default App;
