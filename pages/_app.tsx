import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//INTERNAL IMPORT
import {NavBar} from '../Component/index'
export default function App({ Component, pageProps }: AppProps) {
  return(
    <div>
      <NavBar />
   <Component {...pageProps} />
   </div>
   )
}
