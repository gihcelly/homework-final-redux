import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FPS from './pages/FPS/FPS';
import { PaginaPadrao } from './components/PaginaPadrao/PaginaPadrao';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path='/' element={<PaginaPadrao/>}>
              <Route path='/categoria/fps' element={<FPS />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
