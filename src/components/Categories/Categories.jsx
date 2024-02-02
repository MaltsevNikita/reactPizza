import React from 'react'
import styles from './Categories.module.scss'

const Categories = ({items, onClickItem}) => {
  return (
    <div className={styles.catigoriesBlock}>
      <ul className={styles.categoriesList}>
        <li className={styles.categoriesItem}>Все</li>
        {
          items.map((category, index) => <li 
            onClick={() => onClickItem(category)} 
            className={styles.categoriesItem} 
            key= {`${category}_${index}`}>{category}
          </li>)
        }
         
      </ul>
    </div>
  )
}

export default Categories