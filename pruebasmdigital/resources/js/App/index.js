import React from 'react';
import ReactDOM from 'react-dom';

import {
    Route,
    Routes,
    BrowserRouter,
    Navigate,
    Switch
} from 'react-router-dom';

import BookPage from '../Pages/BookPage';
import LectorPage from '../Pages/LectorPage';
import DetailLector from '../Pages/DetailLector';
import CreateLectorPage from '../Pages/CreateLectorPage';
import CreateBookPage from '../Pages/CreateBookPage';
import Header from '../Pages/Header';
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path={"/"} element={<Navigate to="/books" />} />
                    <Route exact path={'/lector/create'} element={<CreateLectorPage />} />
                    <Route exact path={'/lectors'} element={<LectorPage />} />
                    <Route exact path={'/lectors/details'} element={<DetailLector />} />
                    <Route exact path={'/books'} element={<BookPage />} />
                    <Route exact path={'/book/create'} element={<CreateBookPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
