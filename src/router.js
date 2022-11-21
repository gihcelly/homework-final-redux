import { Provider } from 'react-redux';
import store from './app/store';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import FPS from './pages/FPS/FPS';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/categoria/fps' element={<FPS />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
