import { addItem, removeItem, changeItem } from "./taskSlice";

export const handleAddTask = (values) => {
    return (dispatch, getState) => {
        const items = getState().taskHandler.items;
        const text = values.task;
        const newItems = [
            ...items,
            { id: Math.random(), text }
        ];
        dispatch(addItem(newItems));
        localStorage.setItem('items', JSON.stringify(newItems));
        values.task = '';
    }
}

export const handleClearAll = () => {
    return (dispatch) => {
        dispatch(addItem([]));
        localStorage.setItem('items', JSON.stringify([]));
    }
}

export const handleClearItem = (id) => {
    return (dispatch, getState) => {
        dispatch(removeItem(id));
        const items = getState().taskHandler.items;
        const newItems = items.filter(item => item.id !== id)
        localStorage.setItem('items', JSON.stringify(newItems));
    }
}

export const handleEditItem = (id) => {
    return (dispatch, getState) => {
        dispatch(changeItem(id));
        const items = getState().taskHandler.items;
        localStorage.setItem('items', JSON.stringify(items));
    }
}