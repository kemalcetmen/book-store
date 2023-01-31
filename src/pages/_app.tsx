import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import LayoutLogin from '@/components/LayoutLogin'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutLogin>
      <Component {...pageProps} />
    </LayoutLogin>
  )
}