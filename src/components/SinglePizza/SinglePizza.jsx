import React from 'react'
import styles from './SinglePizza.module.scss'

const SinglePizza = (props) => {
  return (
    <div className={styles.singlePizza}>
            <img src="img/pizzas/cheseburger.png" alt="cheseburger" />
            <h2>{props.title}</h2>
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
                <span>{props.price}</span>
                <span>руб.</span>
              </p>
            </div>
          </div>
  )
}

export default SinglePizza