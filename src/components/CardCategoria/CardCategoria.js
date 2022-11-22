import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/img-cardsCat/fps.jpg'
import styles from  '../CardCategoria/CardCategoria.module.scss'

export const CardCategoria = ({link, imagem, nome}) => {
  return (
    
        <div className={styles.cardContainer}>
            <div className={styles.divImg}><Link to= {link}><img src={imagem}/></Link></div>
            <h3>{nome}</h3>
        </div>
        
    
  )
}
