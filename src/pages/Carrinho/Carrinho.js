import styles from "./Carrinho.module.scss";
import { Header } from "../../components/Header/Header";

const Carrinho = () => {
	return (
		<>
			<Header
				titleCategory={"Finalize sua compra agora!"}
				description={"Todos os jogos com 10% de desconto"}
			/>
			<div className={styles.container}>
				<div className={styles.item1}>

				</div>
				<div className={styles.item2}>
					<div className={styles.divResumo}>
						<span className={styles.bold}>Resumo da compra</span>
						<div>
							<span>Subtotal: </span>
							<span className={styles.bold}>R$ 0.00</span>
						</div>
					</div>
					<button>Finalizar compra</button>
				</div>
			</div>
		</>
	);
};

export default Carrinho;
