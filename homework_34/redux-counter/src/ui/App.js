import { Provider } from 'react-redux';
import { store } from '../engine/init/store';
import Counter from './containers/Counter';

export default function App() {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
}


