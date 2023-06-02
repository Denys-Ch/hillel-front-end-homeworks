import { Provider } from 'react-redux';
import { store } from '../../engine/init/store';
import TasksCountContainer from '../containers/TasksCountContainer';

export default function Footer() {
    return (
        <Provider store={store}>
            <TasksCountContainer />
        </Provider>
    )
}