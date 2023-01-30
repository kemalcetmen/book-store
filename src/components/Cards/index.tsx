import React from 'react'
import styles from './index.module.css'
import Card from '../Card'
import { Book } from '../../../types/types'

const cards = [{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
},
{
    "author": "Oğuz Atay",
    "cover": "tutunamayanlar.png",
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
]
const index = () => {
    return (
        <ul className={styles.container}>
            {cards.map((book: Book,i: number) => (
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