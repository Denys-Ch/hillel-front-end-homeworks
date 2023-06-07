import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Form } from 'react-final-form';
import { Request } from '../components/Request';
import Item from '../components/Item';
import { addItem } from '../../engine/core/swapiSlice';
import { newItems } from '../../engine/core/swapiSlice';

export default function SwapiForm() {
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        const input = values.request
        const response = await axios.get(`https://swapi.dev/api/${input}`);
        const URLInfo = input.split('/');
        const URLController = URLInfo[0];
        const requestId = URLInfo[1];
        dispatch(addItem([response.data, URLController, requestId]));
        values.request = ''
    };
    const items = useSelector(newItems);
    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                render={Request}
            />
            <div>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        text={item.text}
                        URLId={item.URLId}
                        URLController={item.URLController}
                        id={item.id}
                    />
                ))}
            </div>
        </div>
    )
}