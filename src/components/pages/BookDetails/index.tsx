import React from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import GoBack from '@/components/GoBack'
import { Book } from '../../../../types/book'

interface Props {
    book: Book
}

const index = ({ book }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <GoBack/>
                    <h2>
                        Book Details
                    </h2>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.image_container}>
                    <div className={styles.image}>
                        <Image
                            src={book.cover}
                            alt={book.name}
                            height={450}
                            width={300}
                        />
                    </div>
                </div>
                <div className={styles.texts}>
                    <div className={styles.texts_title}>
                        <h1>
                            {book.name}
                        </h1>
                        <h2>
                            {book.author}
                        </h2>
                    </div>
                    <div className={styles.texts_content}>
                        <h3>
                            Summary
                        </h3>
                        <p>
                            {book.description}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.buy}>
                    <p>
                        {book.price} $
                    </p>
                    <p>
                        Buy Now
                    </p>
                </div>
            </div>
        </div>
    )
}

export default index