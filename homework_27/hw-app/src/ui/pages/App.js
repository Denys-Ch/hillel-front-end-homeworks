import React from "react";
import "../../App.css";
import Header from "../components/Header";
import Sidenav from "../components/Sidenav";
import Form from "../components/Form";

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="wrapper">
                    <Sidenav />
                    <Form />
                </div>
            </div>
        );
    }
}

export default App;
