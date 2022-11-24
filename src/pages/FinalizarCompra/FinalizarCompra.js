import styles from "./FinalizarCompra.module.scss";

import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import CardCarrinho from "../../components/CardCarrinho/CardCarrinho";
import { clearCart } from "../../app/reducers/cartReducer";

export const FinalizarCompra = () => {
	const dispatch = useDispatch();
	const { cart, totalPrice } = useSelector((state) => {
		let totalPrice = 0;
		const regexp = new RegExp(state.search, "i");
		const cartReduce = state.cart.reduce((allItens, itemInCart) => {
			const item = state.allItens.find((item) => item.id === itemInCart.id);
			totalPrice += item.price * itemInCart.qtd;
			if (item.titleCard.match(regexp)) {
				allItens.push({
					...item,
					qtd: itemInCart.qtd,
				});
			}
			return allItens;
		}, []);
		return {
			cart: cartReduce,
			totalPrice,
		};
	});

	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	return (
		<>
			<div className={styles.container}>
				<h1>Finalizando sua compra</h1>
				{cart.map((item) => (
					<CardCarrinho key={item.id} {...item}/>
				))}
				<div className={styles.item2}>
					<div className={styles.divResumo}>
						<button onClick={() => dispatch(clearCart())}>Finalizar compra</button>
						<div>
							<span>Subtotal: R$ <strong>{totalPrice.toFixed(2)}</strong></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FinalizarCompra