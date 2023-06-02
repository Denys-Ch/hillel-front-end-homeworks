import { useSelector } from 'react-redux';
import { value } from '../../engine/core/counterSlice';

export default function ValueContainer(props) {
    const countValue = useSelector(value);
    return (
        <h1>
            Value: {countValue}
        </h1>
    );
}