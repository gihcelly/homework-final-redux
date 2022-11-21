import { Provider } from 'react-redux';
import store from './app/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { Navbar } from './components/Navbar/Navbar';
import { PaginaPadrao } from './components/PaginaPadrao/PaginaPadrao';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<PaginaPadrao/>}>
              
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
