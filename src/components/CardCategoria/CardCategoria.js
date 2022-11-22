import React from 'react'
import { Link } from 'react-router-dom'

import styles from  '../CardCategoria/CardCategoria.module.scss'

export const CardCategoria = ({link, imagem, nome}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.divImg}><Link to= {link}><img src={imagem} alt='Card Img' /></Link></div>
      <h3>{nome}</h3>
    </div>
  )
}
