import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './ui/pages/App';
import { useStyles } from './useStyle';
import Footer from './ui/components/Footer'


function Index(props) {
    const classes = useStyles(props);
    return (
        <div className={classes.container}>
            <main>
                <App />
            </main>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


