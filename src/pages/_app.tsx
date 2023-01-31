import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageWithLayoutType from '../../types/pageWithLayout'

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || BasicLayout

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
const BasicLayout = ({ children }: {children :React.ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}