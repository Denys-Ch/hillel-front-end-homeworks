import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ui/containers/ErrorBoundary';
import Header from './ui/components/Header';
import App from './ui/pages/App';
import About from './ui/pages/About';
import Contacts from './ui/pages/Contacts';
import { useStyles } from './useStyle';

function Index(props) {
    const classes = useStyles(props);
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className={classes.container}>
                    <Header />
                    <main>
                        <Routes>
                            <Route path='/' element={<App />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/contacts' element={<Contacts />} />
                        </Routes>
                    </main>
                </div>
            </BrowserRouter>
        </ErrorBoundary>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


