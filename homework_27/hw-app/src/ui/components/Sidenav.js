import React from "react";

export default class Sidenav extends React.Component {
    render() {
        return <nav className="sidenav">
            <ul className="links-list">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Settings</a>
                </li>
                <li>
                    <a href="#">Help</a>
                </li>
            </ul>
        </nav>

    }
}