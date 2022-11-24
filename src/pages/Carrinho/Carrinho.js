import styles from "./Carrinho.module.scss";

import { useEffect } from "react";

import { Header } from "../../components/Header/Header";
import CardCarrinho from "../../components/CardCarrinho/CardCarrinho";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Carrinho = () => {
	const { cart, totalPrice } = useSelector(state => {
		let totalPrice = 0;
		const regexp = new RegExp(state.search, 'i');
		const cartReduce = state.cart.reduce((allItens, itemInCart) => {
			const item = state.allItens.find(item => item.id === itemInCart.id);
			totalPrice += (item.price * itemInCart.qtd);
			if(item.titleCard.match(regexp)){
				allItens.push({
					...item,
					qtd: itemInCart.qtd
				})
			}
			return allItens;
		}, []);
		return {
			cart: cartReduce,
			totalPrice
		}
	})

	useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	return (
		<>
			<Header titleCategory="Itens no carrinho" description="Todos os jogos com 10% de desconto" />
			<div className={styles.container}>
				{cart.map((item) => <CardCarrinho key={item.id} {...item} />)}	
				<div className={styles.item2}>
					<div className={styles.divResumo}>
						<span className={`${styles.bold} ${styles.first}`}><Link to={'/finalizar-compra'}>Finalizar pedido</Link></span>
						<div><span>Subtotal: <strong>R$ {totalPrice.toFixed(2)}</strong></span></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carrinho;
