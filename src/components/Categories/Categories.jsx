import React from 'react'
import styles from './Categories.module.scss'

const Categories = ({items, onClickItem}) => {
  const [activeItem, setActiveItem] = React.useState('1')

  return (
    <div className={styles.categoriesBlock}>
      <ul className={styles.categoriesList}>
        <li>Все</li>
        
        {
          items.map((category, index) => 
          <li 
            onClick={() => setActiveItem(index)} 
            className={activeItem == index ? styles.categoriesItemActive : styles.categoriesItem} 
            key= {`${category}_${index}`}>{category}
          </li>)
        }
         
      </ul>
    </div>
  )
}

export default Categories