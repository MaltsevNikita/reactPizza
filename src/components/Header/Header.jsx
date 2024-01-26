import React from 'react'
import styles from './Header.module.scss'
import { FiShoppingCart } from "react-icons/fi";
import { FaRubleSign } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.logoBlock}>
        <div className={styles.logoBlock__logoImage}>
          <img src="/logo.png" alt="logo"></img>
        </div>
          <div className={styles.logoText}>
            <h1 className={styles.logoText__mainTitle}>react pizza</h1>
            <p className={styles.logoText__description}>самая вкусная пицца во вселенной</p>
          </div>
      </div>

      <div className={styles.cartBlock}>
        <div className={styles.cartBlock__total}>520</div>
        <FaRubleSign/>
        <span className={styles.cartBlock__vline}>|</span>
        <FiShoppingCart/>
        <div className={styles.goodsNum}>3</div>
        
      </div>
    </div>
  )
}

export default Header