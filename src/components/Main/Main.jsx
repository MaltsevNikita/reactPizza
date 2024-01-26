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
            <b>Сортировка по:</b>
            <span>популярности</span>

          </div>
        </div>
          
        <div className={styles.pizzas}>

          <div className={styles.singlePizza}>
            <img src="img/pizzas/cheseburger.png" alt="cheseburger" />
            <h2>Чизбургер-пицца</h2>
            <div className={styles.pizzaProp}>
              <div className={styles.dought}>
                <button>Тонкое</button>
                <button>Традиционное</button>
              </div>
              <div className="pizzaSize">
                <button>26 см</button>
                <button>30 см</button>
                <button>40 см</button>
              </div>
            </div>
            <div className="pizzaControls">
              <p className="price">
                <span>от</span>
                <span>395</span>
                <span>руб.</span>
              </p>
            </div>
          </div>

          <div className={styles.singlePizza}>
            <img src="img/pizzas/cheseburger.png" alt="cheseburger" />
            <h2>Чизбургер-пицца</h2>
            <div className={styles.pizzaProp}>
              <div className={styles.dought}>
                <button>Тонкое</button>
                <button>Традиционное</button>
              </div>
              <div className="pizzaSize">
                <button>26 см</button>
                <button>30 см</button>
                <button>40 см</button>
              </div>
            </div>
            <div className="pizzaControls">
              <p className="price">
                <span>от</span>
                <span>395</span>
                <span>руб.</span>
              </p>
            </div>
          </div>

          <div className={styles.singlePizza}>
            <img src="img/pizzas/cheseburger.png" alt="cheseburger" />
            <h2>Чизбургер-пицца</h2>
            <div className={styles.pizzaProp}>
              <div className={styles.dought}>
                <button>Тонкое</button>
                <button>Традиционное</button>
              </div>
              <div className="pizzaSize">
                <button>26 см</button>
                <button>30 см</button>
                <button>40 см</button>
              </div>
            </div>
            <div className="pizzaControls">
              <p className="price">
                <span>от</span>
                <span>395</span>
                <span>руб.</span>
              </p>
            </div>
          </div>

          <div className={styles.singlePizza}>
            <img src="img/pizzas/cheseburger.png" alt="cheseburger" />
            <h2>Чизбургер-пицца</h2>
            <div className={styles.pizzaProp}>
              <div className={styles.dought}>
                <button>Тонкое</button>
                <button>Традиционное</button>
              </div>
              <div className="pizzaSize">
                <button>26 см</button>
                <button>30 см</button>
                <button>40 см</button>
              </div>
            </div>
            <div className="pizzaControls">
              <p className="price">
                <span>от</span>
                <span>395</span>
                <span>руб.</span>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Main