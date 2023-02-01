import React from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@/store'
import CategoryPage from '@/components/pages/CategoryPage'
import MainLayout from '@/components/layouts/Main'

export default function index() {
  const router = useRouter()
  const { categories } = useAppSelector((state) => state.products)
  const { category } = router.query
  const theCategory = categories.find(ctg => ctg.name === category)

  return (
    <>
      {
        theCategory ? <CategoryPage categoryName={category} /> : "There is no category you want"
      }
    </>
  )
}

index.layout = MainLayout