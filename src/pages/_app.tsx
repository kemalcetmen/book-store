import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@/components/layouts/Main'
import LoginLayout from "@/components/layouts/Login"
import PageWithLayoutType from '../../types/pageWithLayout'
import { ReactElement } from 'react'

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}
export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || ((children: ReactElement) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}