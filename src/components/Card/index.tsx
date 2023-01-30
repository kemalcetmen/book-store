import React from 'react'
import { Book } from '../../../types/types'
import styles from './index.module.css'
import Image from 'next/image'
type Props = {
    book: Book
}

const index = ({ book }: Props) => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ80VND5MFLv3cXobZjMpeiaac-50_yjNatg&usqp=CAU"
                    alt={book.name}
                    fill
                />
            </div>
            <div className={styles.footer}>
                <div className={styles.texts}>
                    <h4>
                        {book.name}
                    </h4>
                    <p>
                        {book.author}
                    </p>
                </div>
                <div className={styles.price}>
                    {book.price} $
                </div>
            </div>
        </div>
    )
}

export default index