import { useStyles } from '../../useStyle';
import { todosAsyncAction } from '../../engine/core/saga/asyncAction';
import { useDispatch } from 'react-redux';
import Button from './Button';

export default function Item(props) {
    const { text, id, checkedItem } = props;
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const removeItem = () => { dispatch(todosAsyncAction.removeTodoAsync(id)) };
    const editItem = () => { dispatch(todosAsyncAction.editTodoAsync(id)) };
    const checkItem = () => { dispatch(todosAsyncAction.checkTodoAsync(id)) };
    return (
        <div className={classes.item}>
            <div style={{ textDecoration: checkedItem && 'line-through' }} className={classes.itemDesc}>{text}</div>
            <Button
                text='Delete'
                onClick={removeItem}
                customClass={classes.itemBtn}
            />
            <Button
                text='Edit'
                onClick={editItem}
                customClass={classes.itemBtn}
            />
            <Button
                text='Done'
                onClick={checkItem}
                customClass={classes.itemBtn}
            />
        </div>
    )
}