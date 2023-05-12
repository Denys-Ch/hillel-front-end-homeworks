import React from "react";

export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votesCounter: 0
        }
        this.handleVote = this.handleVote.bind(this);
    }

    handleVote() {
        this.setState({
            votesCounter: this.state.votesCounter + 1
        })
        return this.state.votesCounter;
    }
    render() {
        const { text } = this.props;
        const votes = this.state.votesCounter;
        return <li className="list-item" onClick={this.handleVote}>
            {text} <br></br> Votes: {votes}
        </li>
    }
}