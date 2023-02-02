import React from 'react'
import { Book } from '../../../types/book'
import styles from './index.module.css'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    book: Book,
    horizontal: boolean
}

const index = ({ book, horizontal }: Props) => {

    return (
        <Link href={`/book/${book.name}`} className={!horizontal ? styles.container : styles.containerH}>
            <div className={!horizontal ? styles.image : styles.imageH}>
                <Image
                    src={book.cover}
                    alt={book.name}
                    height={300}
                    width={200}
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
        </Link>
    )
}

export default index