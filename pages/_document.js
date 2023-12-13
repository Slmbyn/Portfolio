import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/Navbar'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      {/* page layout that effects ALL urls can be placed here */}
      {/* <Navbar /> */}
      <body>
        <Main />
        <NextScript />
      </body>
      <footer>
        Created by Selam Beyene
      </footer>
    </Html>
  )
}
