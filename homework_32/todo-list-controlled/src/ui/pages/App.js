import { useState, useEffect, useRef } from 'react';
import { useInputField } from '../hooks/useInputField';
import '../../App.css';
import Button from '../components/Button';
import Item from '../components/Item';

export default function App() {
    const formInput = useRef(null);
    const [items, setItems] = useState([]);
    const inputText = useInputField('');

    const disableSubmit = inputText.inputValue.length === 0;

    const handleNewItem = (event) => {
        event.preventDefault();
        const text = inputText.inputValue;
        const newItems = [
            ...items,
            { id: Math.random(), text, isChecked: false }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }

    useEffect(
        () => {
            setItems(JSON.parse(localStorage.getItem('items')) || [])
        }, []
    )

    const handleRemoveItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        localStorage.setItem('items', JSON.stringify(newItems));
        setItems(newItems);
    }

    const handleCheckItem = (id) => {
        const checkedItems = items.map((item) => {
            if (item.id === id) {
                if (!item.isChecked) {
                    item.isChecked = true;
                } else {
                    item.isChecked = false;
                }
            }
            return item
        });
        localStorage.setItem('items', JSON.stringify(checkedItems));
        setItems(checkedItems);
    }

    return (
        <div>
            <form
                className='form'
                onSubmit={handleNewItem}
            >
                <input
                    ref={formInput}
                    onChange={inputText.onChange}
                    value={inputText.inputValue}
                    type='text'
                    name='value'
                    required
                    className='form__input'
                />
                <Button
                disabled={disableSubmit}
                text='Add' />
            </form>
            <div>
                {items.map((item) => (
                    <Item
                        checkedItem={item.isChecked}
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        handleRemoveItem={handleRemoveItem}
                        handleCheckItem={handleCheckItem}
                    />
                ))}
            </div>
        </div>
    );
}

