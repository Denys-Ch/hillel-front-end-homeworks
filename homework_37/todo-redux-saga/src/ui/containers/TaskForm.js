import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Form } from 'react-final-form';
import { Task } from '../components/Task';
import Item from '../components/Item';
import { todosAsyncAction } from '../../engine/core/saga/asyncAction';
import { newItems } from '../../engine/core/taskSlice';

export default function TaskForm() {
    const dispatch = useDispatch();
    const handleSubmit = (values) => { dispatch(todosAsyncAction.addTodoAsync(values)) };
    const items = useSelector(newItems);
    useEffect(
        () => {
            dispatch(todosAsyncAction.getTodosAsync());
        },
        []
    )
    
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
                        checkedItem={item.isChecked}
                    />
                ))}
            </div>
        </div>
    )
}

