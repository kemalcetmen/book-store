import { useRouter } from 'next/router'
import BookDetails from '@/components/pages/BookDetails'
import MainLayout from '@/components/layouts/Main'
import { useAppSelector } from '@/store'

export default function index() {
  const { books } = useAppSelector((state) => state.products)
  const router = useRouter()
  const { book } = router.query
  const theBook = books.find(bok => bok.name === book)
  return (
    <>
      {
        theBook ? <BookDetails book={theBook} /> : "There is no book you want"
      }
    </>
  )
}

index.layout = MainLayout