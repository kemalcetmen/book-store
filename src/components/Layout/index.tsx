import React from 'react'
// import styles from './index.module.css'
import Header from './Header'
import Head from 'next/head';

interface Props {
    children: React.ReactNode;
}

const index = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Book Store</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="px-[60px] py-10">
                {children}
            </main>
        </>
    )
}

export default index