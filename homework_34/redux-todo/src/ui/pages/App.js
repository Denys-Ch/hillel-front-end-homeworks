import '../../App.css';
import { Provider } from 'react-redux';
import { store } from '../../engine/init/store';
import TaskForm from '../containers/TaskForm';

export default function App() {
    return (
        <Provider store={store}>
            <TaskForm />
        </Provider>
    );
}


