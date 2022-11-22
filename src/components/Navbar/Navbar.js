import React from 'react';
import styles from './Navbar.module.scss';
import img from '../../assets/brand.png';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Navbar = () => {
  return (

    <nav className= {styles.container }>
        <Link to={'/'}><img src={img} alt='Brand Icon'></img></Link>
        <ul>
          <Link to={'/'}>Pagina inicial</Link>
        </ul>
        <div className={styles.input}>
          <input type="text" placeholder='O que você procura?'/>
          <Link to={'/carrinho'}><AiOutlineShoppingCart className={styles.icon} color='white' size={35}/></Link>
        </div>
    </nav>
  )
}
