import { Link } from 'react-router-dom';
import styles from './CardDetail.module.scss';

import { FaCartPlus } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai'

const CardDetail = ({ image, price, titleCard, descriptionCard }) => {
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
            <AiOutlineHeart />
            <Link to={'/carrinho'}><FaCartPlus /></Link> 
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetail