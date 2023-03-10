import React, { useEffect } from 'react'
import Header from './Header'
import Head from 'next/head';
import type { LayoutProps } from '../../../../types/pageWithLayout'
import { fetchBooks } from '@/features/productsSlice'
import { addtoken } from '@/features/tempTokenSlice'
import { useAppDispatch, useAppSelector } from '@/store'
import { useRouter } from 'next/router'

interface Props {
    children: React.ReactNode;
}

const index: LayoutProps = ({ children }: Props) => {
    const router = useRouter()
    const dispatch = useAppDispatch()
    const { tempToken } = useAppSelector((state) => state.tempToken)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (!token && !tempToken) {
                router.push("/login")
            } else {
                dispatch(fetchBooks());
            }
        }
    }, [])
    
    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token")
            if (token && !tempToken) {
                dispatch(addtoken(token))
            }
        }
    }, [])

    return (
        <>
            <Head>
                <title>Book Store</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
                <link rel="shortcut icon" href="/logo.svg" />
            </Head>
            <Header />
            <main className="px-[60px] py-10">
                {children}
            </main>
        </>
    )
}

export default index