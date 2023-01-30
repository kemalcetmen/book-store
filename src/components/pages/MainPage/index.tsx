import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.swiper}>
                sddsf
                sdv
            </div>
            <div className={styles.categories}>
                <div className={styles.one_category}>
                    <div className={styles.category_header}>
                        <div className={styles.category_title}>
                            Best Seller
                        </div>
                        <div className={styles.category_view}>
                            Best Seller
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <Cards/>

                    </div>
                </div>
                <div className={styles.oneCategory}>
                    <div className={styles.category_header}>
                        <div className={styles.category_title}>
                            Best Seller
                        </div>
                        <div className={styles.category_view}>
                            Best Seller
                        </div>
                    </div>
                    <div className={styles.cards}>

                    </div>
                </div>
                <div className={styles.oneCategory}>
                    <div className={styles.category_header}>
                        <div className={styles.category_title}>
                            Best Seller
                        </div>
                        <div className={styles.category_view}>
                            Best Seller
                        </div>
                    </div>
                    <div className={styles.cards}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index