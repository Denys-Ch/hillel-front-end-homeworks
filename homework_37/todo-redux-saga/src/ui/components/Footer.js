import { useDispatch } from 'react-redux';
import { useStyles } from '../../useStyle';
import { todosAsyncAction } from '../../engine/core/saga/asyncAction';
import TasksCountContainer from '../containers/TasksCountContainer';
import Button from './Button';

export default function Footer(props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const onClick = () => { dispatch(todosAsyncAction.removeAllTodosAsync()); }
    return (
        <footer>
            <TasksCountContainer />
            <Button
                onClick={onClick}
                text='Remove All'
                customClass={classes.itemBtn}
            />
        </footer>
    )
}