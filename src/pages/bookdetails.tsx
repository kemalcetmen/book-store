import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import BookDetails from '@/components/pages/BookDetails'

import MainLayout from '@/components/layouts/Main'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <BookDetails/>
  )
}

index.layout = MainLayout
