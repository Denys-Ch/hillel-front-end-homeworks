import React from 'react';
import Button from './Button';

export default class Item extends React.Component {
    render() {
        const { text, handleRemoveItem, handleEditItem, id } = this.props;
        const onClick = () => {
            handleRemoveItem(id);
        }
        const onClickEdit = () => {
            handleEditItem(id);
        }
        return (
            <div className='todo-item'>
                <div className='todo-item__description'>{text}</div>
                <Button
                    text='Delete'
                    onClick={onClick}
                    customClass='todo-item__btn'
                />
                <Button
                    text='Edit'
                    onClick={onClickEdit}
                    customClass='todo-item__btn'
                />
            </div>
        )
    }
}