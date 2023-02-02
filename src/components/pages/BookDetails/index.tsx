import React, { useState } from 'react'
import styles from './index.module.css'
import Image from 'next/image'
import GoBack from '@/components/GoBack'
import { useAppSelector } from '@/store'

import { Book } from '../../../../types/book'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import axios from "axios"

interface Props {
    book: Book
}

const index = ({ book }: Props) => {
    const { tempToken } = useAppSelector((state) => state.tempToken)
    const [liked, setLiked] = useState(false)
    const userid = localStorage.getItem("id")

    const likeunlike = async ()=> {
        const { data } = await axios.post('/api/likeunlike', {
            token: tempToken,
            user_id: userid,
            product_id: book.id,
            liked: liked,
        })
        console.log(data)
        setLiked(liked=>!liked)
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <GoBack />
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
                        <div className={styles.hs}>
                            <h1>
                                {book.name}
                            </h1>
                            <h2>
                                {book.author}
                            </h2>
                        </div>
                        <div onClick={likeunlike} className={styles.heart}>
                            {
                                !liked
                                ?
                                <AiOutlineHeart size={23} color={"#6251DD"}/>
                                :
                                <AiFillHeart size={23} color={"#6251DD"}/>

                            }

                        </div>
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