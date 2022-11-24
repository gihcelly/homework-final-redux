import styles from './Navbar.module.scss';
import img from '../../assets/brand.png';
import { Link, useLocation } from 'react-router-dom';

import { AiOutlineSearch } from 'react-icons/ai';
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux';
import {changeSearch, resetSearch} from '../../app/reducers/search'
import { useEffect, useState } from 'react';

export const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
 
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(resetSearch())
  }, [pathname, input])

  return (
    <nav className= {styles.container }>
      <Link to={'/'}><img src={img} alt='Brand Icon'></img></Link>
      <ul>
        <Link to={'/'}>Pagina inicial</Link>
      </ul>
      <div className={styles.input}>
        <div className={styles.search}>
          <input type="text" placeholder='O que você procura?' onChange={event => setInput(event.target.value)}/>
          <AiOutlineSearch onClick={() => dispatch(changeSearch(input))} size={25} color='4b3f4e' />
        </div>
        {pathname !== '/carrinho' 
          ? <Link to={'/carrinho'}><RiShoppingCart2Line className={styles.icon} size={35}/></Link>
          : <RiShoppingCart2Fill className={styles.icon} size={35} color='fff' />
        }
      </div>
    </nav>
  )
}
