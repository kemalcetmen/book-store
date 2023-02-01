import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar } from 'swiper';
import { useAppSelector } from '@/store'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const index = () => {
    const { books, categories } = useAppSelector((state) => state.products)
    console.log(books)

    return (
        <div className={styles.container}>
            <div className={styles.the_swiper}>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, Scrollbar]}
                    pagination={{ clickable: true }}

                >
                    {
                        [...Array(3)].map((e, i) =>
                            <SwiperSlide>
                                <div key={i} className={styles.slide_container}>
                                    <div className={styles.image_container}>
                                        <div className={styles.texts}>
                                            <p>25% discount</p>
                                            all Paulo Coelho
                                            books!
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
            <div className={styles.categories}>
                {
                    categories.map((category) =>
                        <div className={styles.one_category}>
                            <div className={styles.category_header}>
                                <div className={styles.category_title}>
                                    {category.name}
                                </div>
                                <div className={styles.category_view}>
                                    View All
                                </div>
                            </div>
                            <div className={styles.cards}>
                            {/* <Cards books={books.slice(0, 4)} /> */}
                            <Cards books={books.filter(book => book.category===category.name).slice(0, 4)} />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default index