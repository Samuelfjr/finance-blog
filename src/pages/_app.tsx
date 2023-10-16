import type { AppProps } from 'next/app'
import { roboto, sora } from '../styles/fonts'


export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <main className={ roboto.className }>
      <Component {...pageProps} />
    </main>
  )
}
