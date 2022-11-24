import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./app/store";

import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import FPS from "./pages/FPS/FPS";
import Home from "./pages/Home/Home";
import Sobrevivencia from "./pages/Sobrevivencia/Sobrevivencia";
import RPG from "./pages/RPG/RPG";
import Carrinho from "./pages/Carrinho/Carrinho";
import Moba from "./pages/Moba/Moba";
import Simulacao from "./pages/Simulacao/Simulacao";
import { FinalizarCompra } from "./pages/FinalizarCompra/FinalizarCompra";

function AppRouter() {
	return (
		<>
			<BrowserRouter>
				<Provider store={store}>
					<Navbar />
					<Routes>
						<Route index element={<Home />} />
						<Route path="/categoria/fps" element={<FPS />} />
						<Route path="/categoria/sobrevivencia" element={<Sobrevivencia />} />
						<Route path="/categoria/rpg" element={<RPG />} />
						<Route path="/categoria/moba" element={<Moba />} />
						<Route path="/categoria/simulacao" element={<Simulacao />} />
						<Route path="/carrinho" element={<Carrinho />} />
						<Route path="/finalizar-compra" element={<FinalizarCompra />} />
					</Routes>
					<Footer />
				</Provider>
			</BrowserRouter>
		</>
	);
}

export default AppRouter;
