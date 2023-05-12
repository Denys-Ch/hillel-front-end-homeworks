import React from "react";

export default class Button extends React.Component {
    render() {
        const {onClick} = this.props;
        return <button type="button" onClick={onClick}>Show Results</button>
    }
}