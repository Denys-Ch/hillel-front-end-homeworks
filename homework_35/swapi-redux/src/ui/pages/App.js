import '../../App.css';
import { Provider } from 'react-redux';
import { store } from '../../engine/init/store';
import SwapiForm from '../containers/SwapiForm';

export default function App() {
    return (
        <Provider store={store}>
            <SwapiForm />
        </Provider>
    );
}

