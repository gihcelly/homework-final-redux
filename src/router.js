import { Provider } from 'react-redux';
import { store } from './app/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
  
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
