import React from 'react';
import '../../App.css';
import Header from '../components/Header';
import Button from '../components/Button';
import Item from '../components/Item';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.FormInput = React.createRef();
        this.state = {
            items: []
        }
        this.handleGetInputValue = this.handleGetInputValue.bind(this)
        this.handleNewItem = this.handleNewItem.bind(this);
        this.handleRemoveItem = this.handleRemoveItem.bind(this);
        this.handleEditItem = this.handleEditItem.bind(this);
    }

    componentDidMount() {
        this.setState({
            items: JSON.parse(localStorage.getItem('items')) || []
        });
    }

    handleGetInputValue() {
        const input = this.FormInput.current.value;
        return input;
    }

    handleNewItem(event) {
        event.preventDefault();
        const text = this.handleGetInputValue(event);
        const newItems = [
            ...this.state.items,
            { id: Math.random(), text }
        ];
        this.setState({
            items: newItems
        })
        localStorage.setItem('items', JSON.stringify(newItems));
        this.FormInput.current.value = ''
    }

    handleRemoveItem(id) {
        this.setState((state) => {
            const { items } = state;
            const newItems = items.filter(item => item.id !== id);
            localStorage.setItem('items', JSON.stringify(newItems));
            return {
                items: newItems,
            }
        });
    }

    handleEditItem(id) {
        const newText = prompt('Введите текст');
        if (newText !== null) {
            this.setState((state) => {
                const { items } = state;
                const editedItem = items.filter(item => item.id === id);
                editedItem[0].text = newText;
                localStorage.setItem('items', JSON.stringify(items));          
                return items;
            })
        }
    }

    render() {
        const { items } = this.state;
        return (
            <div className='container'>
                <Header />
                <form
                    className='form'
                    onSubmit={this.handleNewItem}
                >
                    <input ref={this.FormInput} type='text' name='value' required className='form__input' />
                    <Button text='Add' />
                </form>
                <div>
                    {items.map((item) => (
                        <Item
                            key={item.id}
                            text={item.text}
                            id={item.id}
                            handleRemoveItem={this.handleRemoveItem}
                            handleEditItem={this.handleEditItem}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
