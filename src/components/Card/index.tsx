import React from 'react'
import { Book } from '../../../types/types'
import styles from './index.module.css'
import Image from 'next/image'
type Props = {
    book: Book
}

const horizontal = false

const index = ({ book }: Props) => {
    return (
        <div className={!horizontal ? styles.container : styles.containerH}>
            <div className={!horizontal ? styles.image : styles.imageH}>
                <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ80VND5MFLv3cXobZjMpeiaac-50_yjNatg&usqp=CAU"
                    alt={book.name}
                    fill

                />
            </div>
            <div className={!horizontal ? styles.footer : styles.footerH}>
                <div className={!horizontal ? styles.texts : styles.textsH}>
                    <h4>
                        {book.name}
                    </h4>
                    <p>
                        {book.author}
                    </p>
                </div>
                <div className={!horizontal ? styles.price : styles.priceH}>
                    {book.price} $
                </div>
            </div>
        </div>
    )
}

export default index