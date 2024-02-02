import React from 'react'
import styles from './Main.module.scss'
import { GoTriangleUp } from "react-icons/go";
import SinglePizza  from '../SinglePizza/SinglePizza';
import Categories  from '../Categories/Categories';

const Main = () => {
  return (
    <>
      <div className={styles.container}>
    
        <div className={styles.mainTop}>
          <Categories items = {['Мясные',
            'Вегитарианские',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}/>

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