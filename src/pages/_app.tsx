import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import PageWithLayoutType from '../../types/pageWithLayout'
import { Provider } from "react-redux";
import store from "../store/index";

type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}

export default function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || BasicLayout

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}