import { Form } from 'react-final-form';
import { useState, useEffect } from 'react';
import { Task } from '../components/Task';
import '../../App.css';
import Item from '../components/Item';

export default function App() {
    const [items, setItems] = useState([]);

    const initialValues = {
        task: ''
    }

    const validateTask = (values) => {
        let errors = {}
        if (values.task !== undefined) {
            if (values.task.length < 5) {
                errors.task = 'Текст должен содержать не менее 5 символов'
            }
        }
        return errors
    }

    const handleSubmit = (values) => {
        const text = values.task;
        const newItems = [
            ...items,
            { id: Math.random(), text, isChecked: false }
        ];
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
        values.task = '';
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
            <Form
                onSubmit={handleSubmit}
                initialValues={initialValues}
                validate={validateTask}
                render={Task}
                disabled={true}
            />
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

