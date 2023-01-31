import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import MainPage from '@/components/pages/MainPage'
import RegisterPage from '@/components/pages/Register'
import LoginPage from '@/components/pages/Login'
import CategoryPage from '@/components/pages/CategoryPage'
import BookDetails from '@/components/pages/BookDetails'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <LoginPage/>
  )
}