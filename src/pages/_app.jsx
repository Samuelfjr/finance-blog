import { roboto, sora } from '../styles/fonts'

import '../styles/globals.scss'


export default function App({ Component, pageProps }) {
  return ( 
    <main className={ roboto.className }>
      <Component {...pageProps} />
    </main>
  )
}
