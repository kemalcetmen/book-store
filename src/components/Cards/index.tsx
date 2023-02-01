import React from 'react'
import styles from './index.module.css'
import Card from '../Card'
import { Book } from '../../../types/book'

interface Props {
    books?: Book[],
}
const index = ({books}: Props) => {
    return (
        <ul className={styles.container}>
            {books?.map((book: Book,i: number) => (
                <li key={i}>
                    <Card
                        book={book}
                    />
                </li>
            ))}
        </ul>
    )
}

export default index