import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './ui/containers/ErrorBoundary';
import Header from './ui/components/Header';
import App from './ui/pages/App';
import About from './ui/pages/About';
import Contacts from './ui/pages/Contacts';

function Index() {
    return (
        <ErrorBoundary>
            <BrowserRouter>
                <div className='container'>
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


