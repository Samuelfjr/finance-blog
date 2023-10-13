import type { AppProps } from 'next/app'
import { Roboto, Sora } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '500', ],
  subsets: ['latin'],
  variable: '--font-roboto'
})

const sora = Sora({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-sora'
})

export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <main>
      <Component {...pageProps} />
    </main>
  )
}
