import React from 'react'
import Head from 'next/head';
import styles from './index.module.css'
import type { LayoutProps } from '../../../../types/pageWithLayout'

interface Props {
    children: React.ReactNode;
}

const index: LayoutProps = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>Book Store Welcome</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
                <link rel="shortcut icon" href="/logo.svg" />
            </Head>
            <div className={styles.container}>
                <div className={styles.image}>

                </div>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default index