import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeItem } from '../../engine/core/swapiSlice';

export default function Item(props) {
    const { text, URLController, URLId, id } = props;
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(removeItem(id));
    }
    return (
        <div>
            <div className='items'>
                <div className='items-element'>{URLController}</div>
                {URLId ? <div className='items-element'>{URLId}</div> : undefined}
                <pre>{JSON.stringify(text, null, 1)}</pre>
            </div>
            <div>
                <Button
                    text='Remove'
                    onClick={onClick}
                />
            </div>
        </div>
    )

}