import { useDispatch } from 'react-redux';
import { useStyles } from '../../useStyle';
import { handleClearAll } from '../../engine/core/thunks';
import TasksCountContainer from '../containers/TasksCountContainer';
import Button from './Button';

export default function Footer(props) {
    const classes = useStyles(props);
    const dispatch = useDispatch();
    const onClick = () => { dispatch(handleClearAll()); }
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