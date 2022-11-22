import styles from './CardDetail.module.scss';

import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { changeFavorite } from '../../app/reducers/cardDetail';
import { useDispatch, useSelector } from 'react-redux';

export default function CardDetail (props) {
  const { titleCard, descriptionCard, price, image, id, favorite, cart, qtd } = props
  
  const dispatch = useDispatch();
  // const inCart = useSelector(state => state.cart.some(itemInCart => itemInCart.id === id));

  const handleFavorite = () => dispatch(changeFavorite(id));

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardImg}>
          <img src={image} alt="Card Img" />
        </div>
        <div className={styles.cardBody}>
          <h3>{titleCard}</h3>
          <p>{descriptionCard}</p>
        </div>
        <div className={styles.cardFooter}>
          <div className={styles.prices}>
            <span>R$ <span className={styles.price}>{price}</span></span>
          </div>
          <div className={styles.icons}>
            {favorite
              ? <AiFillHeart color='#ff0000' onClick={handleFavorite} />
              : <AiOutlineHeart onClick={handleFavorite} />
            }
            <FaCartPlus />
          </div>
        </div>
      </div>
    </>
  )
}