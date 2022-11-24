import styles from './CardDetail.module.scss';

import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { changeFavorite } from '../../app/reducers/cardDetail';
import { changeCart } from '../../app/reducers/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function CardDetail (props) {
  const { titleCard, descriptionCard, price, image, id, favorite } = props;
  
  const dispatch = useDispatch();
  const inCart = useSelector(state => state.cart.some(itemInCart => itemInCart.id === id));

  const handleFavorite = () => dispatch(changeFavorite(id));
  const handleCart = () => dispatch(changeCart(id));

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
            {price !== 0
              ? <span>R$ <span className={styles.price}>{String(price).replace('.', ',')}</span></span> 
              : <span><span className={styles.price}>{String(price).replace('0', 'Free to play')}</span></span> 
            }
          </div>
          <div className={styles.icons}>
            {favorite
              ? <AiFillHeart color='#ff0000' onClick={handleFavorite} />
              : <AiOutlineHeart onClick={handleFavorite} />
            }
            <FaCartPlus color={inCart ? '#018a1a' : '#000'} onClick={handleCart} /> 
          </div>
        </div>
      </div>
    </>
  )
}