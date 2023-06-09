import { useStyles } from '../../useStyle';
import { handleClearItem, handleEditItem } from '../../engine/core/thunks';
import { useDispatch } from 'react-redux';
import Button from './Button';

export default function Item(props) {
    const { text, id } = props;
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const removeItem = () => { dispatch(handleClearItem(id)) };
    const editItem = () => { dispatch(handleEditItem(id)) };
    return (
        <div className={classes.item}>
            <div className={classes.itemDesc}>{text}</div>
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
        </div>
    )
}