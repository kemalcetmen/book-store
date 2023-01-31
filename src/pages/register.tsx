import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import RegisterPage from '@/components/pages/Register'

import LoginLayout from '@/components/layouts/Login'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <RegisterPage/>
  )
}

index.layout = LoginLayout
