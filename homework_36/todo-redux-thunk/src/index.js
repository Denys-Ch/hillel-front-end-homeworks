import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './engine/init/store';
import './index.css';
import App from './ui/pages/App';
import { useStyles } from './useStyle';
import Footer from './ui/components/Footer'
import { Provider } from 'react-redux';


function Index(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.container}>
            <main>
                <App />
            </main>
            <Provider store={store}>
                <Footer />
            </Provider>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


