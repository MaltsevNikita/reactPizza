import React from 'react'
import styles from './Main.module.scss'
import { GoTriangleUp } from "react-icons/go";

const Main = () => {
  return (
    <>
      <div className={styles.container}>
    
        <div className={styles.mainTop}>
          <div className={styles.catigoriesBlock}>
            <ul className={styles.categoriesList}>
              <li className={styles.categoriesItem}>Все</li>
              <li className={styles.categoriesItem}>Мясные</li>
              <li className={styles.categoriesItem}>Вегитарианские</li>
              <li className={styles.categoriesItem}>Гриль</li>
              <li className={styles.categoriesItem}>Острые</li>
              <li className={styles.categoriesItem}>Закрытые</li>
            </ul>
          </div>
          <div className={styles.SortBlock}>
            <GoTriangleUp/>
            <span>Сортировка по:</span>
            <span>популярности</span>
          </div>
        </div>
          
        <div>pizzas</div>
      </div>
    </>
  )
}

export default Main