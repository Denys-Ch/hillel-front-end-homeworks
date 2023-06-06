import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/App.css'
import App from './ui/pages/App';
import Header from './ui/components/Header'

function Index() {
    return (
        <div className='container'>
            <Header/>
            <main>
                <App />
            </main>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


