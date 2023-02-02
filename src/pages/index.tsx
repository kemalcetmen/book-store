import { Inter } from '@next/font/google'
import MainPage from '@/components/pages/MainPage'

import MainLayout from '@/components/layouts/Main'

const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <MainPage/>
  )
}

index.layout = MainLayout
