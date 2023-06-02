import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-final-form';
import { Task } from '../components/Task';
import Item from '../components/Item';
import { addItem } from '../../engine/core/taskSlice';
import { newItems } from '../../engine/core/taskSlice';

export default function TaskForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values) => {
        const text = values.task;
        dispatch(addItem(text));
        values.task = '';
    };
    const items = useSelector(newItems);
    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                render={Task}
            />
            <div>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        text={item.text}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

