import React, { useState } from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import cards from '../../../../cards.json'
import categories from '../../../../categories.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const index = () => {
    const [bestSellers, setBestSellers] = useState(cards.slice(0, 4))
    const [classics, setClassics] = useState(cards.slice(0, 4))
    const [children, setChildren] = useState(cards.slice(0, 4))
    const [philosophy, setPhilosophy] = useState(cards.slice(0, 4))

    return (
        <div className={styles.container}>
            <div className={styles.the_swiper}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, Scrollbar]}
                    pagination={{ clickable: true }}

                >
                    <SwiperSlide>
                    <div className={styles.slide_container}>
                            <div className={styles.image_container}>
                                <div className={styles.texts}>
                                    <p>25% discount</p>
                                    all Paulo Coelho
                                    books!
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.image_container}>
                            <div className={styles.texts}>
                                <p>25% discount</p>
                                all Paulo Coelho
                                books!
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.image_container}>
                            <div className={styles.texts}>
                                <p>25% discount</p>
                                all Paulo Coelho
                                books!
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={styles.categories}>
                <div className={styles.one_category}>
                    <div className={styles.category_header}>
                        <div className={styles.category_title}>
                            Best Seller
                        </div>
                        <div className={styles.category_view}>
                            View All
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <Cards books={bestSellers} />
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
                        <Cards books={classics} />
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
                        <Cards books={children} />
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
                        <Cards books={philosophy} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index