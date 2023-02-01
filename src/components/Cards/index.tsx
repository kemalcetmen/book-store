import React from 'react'
import styles from './index.module.css'
import Card from '../Card'
import { Book } from '../../../types/book'

interface Props {
    books?: Book[],
    horizontal? : boolean
}
const index = ({books, horizontal= false}: Props) => {
    return (
        <ul className={styles.container}>
            {books?.map((book: Book,i: number) => (
                <li key={i}>
                    <Card
                        book={book}
                        horizontal={horizontal}
                    />
                </li>
            ))}
        </ul>
    )
}

export default index