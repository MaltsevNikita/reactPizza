import React from 'react'
import styles from './Categories.module.scss'

const Categories = ({items}) => {
  return (
    <div className={styles.catigoriesBlock}>
      <ul className={styles.categoriesList}>
        <li className={styles.categoriesItem}>Все</li>
        {
          items.map((category, index) => <li className={styles.categoriesItem} key= {`${category}_${index}`}>{category}</li>)
        }
         
      </ul>
    </div>
  )
}

export default Categories