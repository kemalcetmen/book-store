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
                    src="https://s3.piton.com.tr/assignment/tutunamayanlar.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=P%21T10.MINIO%2F20230131%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230131T191612Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=74a5c539a648a1a3128647635541aba0e7449e5ac66f48851c17fb896feb7acc"
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