import 'styles/globals.css'
import Layout from 'components/layout'

// Font Awesome の設定
import '@fontawesome/fontawesome-svg-core/styles.css'
import { config } from '@fontawesome/fontawesome-svg-core'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp