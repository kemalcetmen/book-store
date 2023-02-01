import React from 'react'
import { useRouter } from 'next/router'

import CategoryPage from '@/components/pages/CategoryPage'

import MainLayout from '@/components/layouts/Main'

export default function index () {
  const router = useRouter()
  const { category } = router.query
  return (
    <CategoryPage category={category} />
  )
}

index.layout = MainLayout