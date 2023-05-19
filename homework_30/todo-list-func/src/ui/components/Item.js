import Button from './Button';

export default function Item(props) {
    const { text, handleRemoveItem, handleCheckItem, id, checkedItem } = props;
    const onClick = () => {
        handleRemoveItem(id);
    }
    const onClickCheck = () => {
        handleCheckItem(id);
    }

    return (
        <div className='todo-item'>
            <div style={{textDecoration: checkedItem && 'line-through'}} className={'todo-item__description'}>{text}</div>
            <Button
                text='Delete'
                onClick={onClick}
                customClass='todo-item__btn'
            />
            <Button
                text='Done'
                onClick={onClickCheck}
                customClass='todo-item__btn'
            />
        </div>
    )
}