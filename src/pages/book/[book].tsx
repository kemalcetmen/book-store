import { useRouter } from 'next/router'

import MainLayout from '@/components/layouts/Main'

export default function index() {
    const router = useRouter()
  const { book } = router.query

  return <p>Post: {book}</p>
}

index.layout = MainLayout