import { useSelector } from 'react-redux';
import { value } from '../../engine/core/counterSlice';

export default function ValueContainer() {
    const countValue = useSelector(value);
    return (
        <h1>
            Value: {countValue}
        </h1>
    );
}