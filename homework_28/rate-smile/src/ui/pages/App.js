import '../../App.css';
import React from 'react';
import ListItem from '../components/ListItem';
import Button from '../components/Button';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.ListItem1 = React.createRef();
        this.ListItem2 = React.createRef();
        this.ListItem3 = React.createRef();
        this.getResult = this.getResult.bind(this);
    }
    
    render() {
        const onClick = () => {
            this.getResult()
        }
        return <div className='container'>
            <ul>
                <ListItem ref={this.ListItem1} text=':)' />
                <ListItem ref={this.ListItem2} text=':(' />
                <ListItem ref={this.ListItem3} text='^__^' />
            </ul>
            <Button onClick={onClick} />
        </div>
    }
    getResult() {
        const currentListItem1 = this.ListItem1.current;
        const currentListItem2 = this.ListItem2.current;
        const currentListItem3 = this.ListItem3.current;
        const itemVotes1 = currentListItem1.state.votesCounter;
        const itemVotes2 = currentListItem2.state.votesCounter;
        const itemVotes3 = currentListItem3.state.votesCounter;
        const results = [itemVotes1, itemVotes2, itemVotes3];
        const maxResult = Math.max(...results);
        const items = [this.ListItem1, this.ListItem2, this.ListItem3];
        const winner = items.filter(item => item.current.state.votesCounter === maxResult);
        alert(`And the winner is...\n${winner[0].current.props.text}`)
    }
}

export default App;
