import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import FPS from './pages/FPS/FPS';
import Home from './pages/Home/Home';

import { Navbar } from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/categoria/fps' element={<FPS />} />
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;
