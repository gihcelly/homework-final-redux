import styles from "./CardCarrinho.module.scss";

import { changeQtd } from "../../app/reducers/cartReducer";
import { useDispatch } from "react-redux";

import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CardCarrinho = (props) => {
	const { pathname } = useLocation();
	const { titleCard, descriptionCard, price, image, id, qtd } = props;
	const dispatch = useDispatch();

	const [total, setTotal] = useState(0);
	const totalPrice = () => {
		setTotal(price * qtd);
	};

	useEffect(() => {
		totalPrice();
	}, [qtd]);

	return (
		<>
			<div key={id} className={styles.item1}>
				<div className={styles.cardImg}>
					<img src={image} alt="Card IMG" />
				</div>
				<div className={styles.cardBody}>
					<h1>{titleCard}</h1>
					<p>{descriptionCard}</p>
          <div>
          <span> 
            R$ <strong>{price} - preço unitário
            </strong></span>
					<span>
						R$ <strong>{total.toFixed(2)}</strong>
					</span>
          </div>
          
				</div>
				<div className={styles.cardActions}>
					<span>Quantidade:</span>
					{pathname == "/carrinho" ? (
						<div>
							<i>
								<CiSquarePlus
									size={30}
									onClick={() => {
										dispatch(changeQtd({ id, qtd: +1 }));
									}}
								/>
							</i>
							<span>{String(qtd || 0).padStart(2, "0")}</span>
							<i>
								<CiSquareMinus
									size={30}
									onClick={() => {
										if (qtd === 1) return;
										dispatch(changeQtd({ id, qtd: -1 }));
									}}
								/>
							</i>
						</div>
					) : (
						<div className={styles.qtd}>
							<span>{String(qtd || 0).padStart(2, "0")}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default CardCarrinho;
