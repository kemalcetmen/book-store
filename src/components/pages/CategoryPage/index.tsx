import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import GoBack from '@/components/GoBack'
import { useAppSelector } from '@/store'

interface Props {
    categoryName: any
}
const index = ({ categoryName }: Props) => {
    const { books } = useAppSelector((state) => state.products)
    const categotyProducts = books.filter(book => {
        return book.category === categoryName
    })

    return (
        <div className={styles.container}>
            <div className={styles.one_category}>
                <div className={styles.category_header}>
                    <div className={styles.category_title}>
                        <GoBack />
                        <h2>
                            {categoryName}
                        </h2>
                    </div>
                </div>
                <div className={styles.cards}>
                    <Cards books={categotyProducts} />
                </div>
            </div>
        </div>
    )
}

export default index