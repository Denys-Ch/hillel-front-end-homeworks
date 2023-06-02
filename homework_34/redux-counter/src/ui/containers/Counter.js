import { useDispatch } from 'react-redux';
import Button from '../components/Button';
import ValueContainer from '../components/ValueContainer';
import { increase, decrease } from '../../engine/core/counterSlice';

export default function Counter() {
    const dispatch = useDispatch();
    const onIncrement = () => {
        dispatch(increase())
    };
    const onDecrement = () => {
        dispatch(decrease())
    };
    return (
        <div>
            <ValueContainer/>
            <Button onClick={onIncrement} text={'+'}/>
            <Button onClick={onDecrement} text={'-'}/>
        </div>
    );
}