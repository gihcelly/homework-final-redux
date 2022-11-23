import styles from './CardCarrinho.module.scss';

import { changeQtd } from '../../app/reducers/cartReducer';
import { useDispatch } from "react-redux";

import { CiSquarePlus, CiSquareMinus } from 'react-icons/ci'

const CardCarrinho = (props) => {
  const { titleCard, descriptionCard, price, image, id, qtd } = props;
  const dispatch = useDispatch();

  return (
    <>
      <div key={id} className={styles.item1}>
        <div className={styles.cardImg}>
          <img src={image} alt="Card IMG" />
        </div>
        <div className={styles.cardBody}>
          <h1>{titleCard}</h1>
          <p>{descriptionCard}</p>
          <span>R$ <strong>{price}</strong></span>
        </div>
        <div className={styles.cardActions}>
          <span>Quantidade:</span>
          <div>
            
            <i><CiSquarePlus size={30} onClick={() => dispatch(changeQtd({ id, qtd: + 1 }))} /></i>
            <span>{String(qtd || 0).padStart(2, '0')}</span>
            <i><CiSquareMinus size={30} onClick={() => {
              if(qtd === 1) return
              dispatch(changeQtd({ id, qtd: - 1 }))}
            }  /></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardCarrinho