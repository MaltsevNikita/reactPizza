import React from 'react'
import styles from './Main.module.scss'
import { GoTriangleUp } from "react-icons/go";
import SinglePizza from '../SinglePizza/SinglePizza'

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
            <b>Сортировка по:</b>
            <span>популярности</span>

          </div>
        </div>
          
        <div className={styles.pizzas}>
          <SinglePizza title='Чизбургер-пицца' img='' price={395}/>         
      
        </div>
      </div>
    </>
  )
}

export default Main