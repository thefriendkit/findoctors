import '../styles/globals.css'
import '../styles/bootstrap.css'
import '../styles/style.css'
import '../styles/menu.css'
import '../styles/vendors.css'
import '../styles/icon_fonts/css/all_icons_min.css'

import Layout from './partials/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
