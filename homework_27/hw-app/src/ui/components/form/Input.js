import React from "react";

export default class Input extends React.Component {
    render() {
        const { type, placeholder } = this.props;
        return (
            <input className="input" type={type} placeholder={placeholder}></input>
        )
    }
}