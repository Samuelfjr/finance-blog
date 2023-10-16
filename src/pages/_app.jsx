import { roboto, sora } from '../styles/fonts'
import '../styles/globals.scss'

import MainLayout from '@/components/Layout/MainLayout'

export default function App({ Component, pageProps }) {
  return ( 
    <MainLayout> 
       <Component {...pageProps} />
    </MainLayout>
  )
}
