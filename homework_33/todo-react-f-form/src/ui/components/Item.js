import Button from './Button';
import { useStyles } from '../../useStyle';

export default function Item(props) {
    const { text, handleRemoveItem, handleCheckItem, id, checkedItem } = props;
    const classes = useStyles(props);
    const onClick = () => {
        handleRemoveItem(id);
    }
    const onClickCheck = () => {
        handleCheckItem(id);
    }

    return (
        <div className={classes.item}>
            <div style={{textDecoration: checkedItem && 'line-through'}} className={classes.itemDesc}>{text}</div>
            <Button
                text='Delete'
                onClick={onClick}
                customClass={classes.itemBtn}
            />
            <Button
                text='Done'
                onClick={onClickCheck}
                customClass={classes.itemBtn}
            />
        </div>
    )
}