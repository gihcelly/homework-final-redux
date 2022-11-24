import styles from "./CardCarrinho.module.scss";
import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import { changeFavorite } from '../../app/reducers/cardDetail';
import { changeQtd, changeCart } from '../../app/reducers/cartReducer';
import { useDispatch } from "react-redux";

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'
import { TiDelete } from 'react-icons/ti';

const CardCarrinho = (props) => {
	const { pathname } = useLocation();
  const { titleCard, descriptionCard, price, image, favorite, id, qtd } = props;
  const dispatch = useDispatch();

	const [total, setTotal] = useState(0);
	const totalPrice = () => setTotal(price * qtd);

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
						{price === total 
							? <span>R$ <strong>{price}</strong> - Unidade</span> 
							: <span>R$ <strong>{total.toFixed(2)}</strong></span>
						}
						{favorite
							? <AiFillHeart size={20} color='#ff0000' onClick={() => dispatch(changeFavorite(id))} />
							: <AiOutlineHeart size={20} onClick={() => dispatch(changeFavorite(id))} />
						}
          </div>
				</div>
				<div className={styles.cardActions}>
					<div><i><TiDelete size={30} onClick={() => dispatch(changeCart(id))} /></i></div>
					<span>Tipo: <strong>Jogo</strong></span>
					<span className={styles.qtdSpan}>Quantidade:</span>
					{pathname === "/carrinho" ? (
						<div>
							<i><CiSquarePlus size={30} onClick={() => dispatch(changeQtd({ id, qtd: +1 }))} /></i>
							<span>{String(qtd || 0).padStart(2, "0")}</span>
							<i><CiSquareMinus size={30} onClick={() => {
									if (qtd === 1) return; dispatch(changeQtd({ id, qtd: -1 }))
								}} />
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
