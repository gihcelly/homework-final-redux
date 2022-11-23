import styles from './Navbar.module.scss';
import img from '../../assets/brand.png';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Navbar = () => {
 
  return (
    <nav className= {styles.container }>
      <Link to={'/'}><img src={img} alt='Brand Icon'></img></Link>
      <ul>
        <Link to={'/'}>Pagina inicial</Link>
      </ul>
      <div className={styles.input}>
        <input type="text" placeholder='O que você procura?'/>  
        <Link to={'/carrinho'}><AiOutlineShoppingCart className={styles.icon} size={35}/></Link>
      </div>
    </nav>
  )
}
