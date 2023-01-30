import React from 'react'
import styles from './index.module.css'
import Cards from '../../Cards'
import { IoIosArrowBack } from 'react-icons/io';
import Image from 'next/image'

const book = {
    "author": "Oğuz Atay",
    "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ80VND5MFLv3cXobZjMpeiaac-50_yjNatg&usqp=CAU",
    "created_at": "2023-01-09T17:17:09.444487",
    "description": "Ülkemizin en değerli yazarlarından biri olan Oğuz Atay’ın yazıldığı dönemde büyük tartışma konusu olmuş eseri Tutunamayanlar, 1972 yılında yayımlanmıştır. Eser, bilinç-akışı tekniğiyle döneme damgasını vurarak Türk Edebiyatı’nda yeni bir çağı başlatmıştır. Pek çok eleştirmen, Tutunamayanlar’ı Türk Dili’nde yazılmış en iyi eser olarak değerlendirmektedir.  Tutunamayanlar Oğuz Atay ismiyle özdeşleşmiş bir roman olarak, büyük yazarımızın hayatından izler taşımasıyla da kısmen otobiyografik bir eser olarak da değerlendirilebilir. Roman, son derece üst düzey diliyle çevirisi en zor romanlar arasında yer alır. Tutunamayanlar, sadece birkaç dile çevrilebilmiştir. “Het leven in stukken” adı altında Flemenkçeye (Hollanda Dili) çevrilen eser, eserin Hollandalı çevirmenine ödül kazandırmıştır.",
    "id": 8,
    "name": "Tutunamayanlar",
    "price": 65.9,
    "sales": 8,
    "slug": "tutunamayanlar",
    "likes_aggregate": {
        "aggregate": {
            "count": 1
        }
    }
}
const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <IoIosArrowBack />
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
                            fill
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