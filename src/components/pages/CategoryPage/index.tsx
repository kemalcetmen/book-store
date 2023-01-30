import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import { IoIosArrowBack } from 'react-icons/io';
import {cards} from '../../../../cards'

const index = () => {
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
                    <Cards books={cards}/>
                </div>
            </div>
        </div>
    )
}

export default index