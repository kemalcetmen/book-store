import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import { IoIosArrowBack } from 'react-icons/io';
import { useAppSelector } from '@/store'

interface Props {
    category?: string[] |string
}
const index = ({category}:Props) => {
    const { books } = useAppSelector((state) => state.products)
    const categotyProducts = books.filter(book => {
        return book.category.toLowerCase() === category
      })
      console.log(categotyProducts)
    
    return (
        <div className={styles.container}>
            <div className={styles.one_category}>
                <div className={styles.category_header}>
                    <div className={styles.category_title}>
                        <IoIosArrowBack />
                        <h2>
                            Best Seller
                        </h2>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Cards books={categotyProducts}/>
                </div>
            </div>
        </div>
    )
}

export default index