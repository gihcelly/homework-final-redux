import styles from './Navbar.module.scss';
import img from '../../assets/brand.png';

import { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import {changeSearch, resetSearch} from '../../app/reducers/search'

import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'

export const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
 
  const [input, setInput] = useState("");

  if(!input) dispatch(resetSearch())

  useEffect(() => {
    dispatch(resetSearch())
    setInput('')
  }, [pathname, dispatch])

  return (
    <nav className= {styles.container }>
      <img src={img} alt='Brand Icon'></img>
      <ul>
        <Link to={'/'}>Home</Link>
      </ul>
      <div className={styles.input}>
        <div className={styles.search}>
          <input type="text" placeholder='O que você procura?' value={input} onChange={e => setInput(e.target.value)}/>
          <AiOutlineSearch onClick={() => dispatch(changeSearch(input))} size={25} color='4b3f4e' />
        </div>
        {pathname !== '/carrinho' && pathname !== '/finalizar-compra'
          ? <Link to={'/carrinho'}><RiShoppingCart2Line className={styles.icon} size={35}/></Link>
          : <Link to={'/carrinho'}><RiShoppingCart2Fill className={styles.icon} size={35} color='fff' /></Link>
        }
      </div>
    </nav>
  )
}
