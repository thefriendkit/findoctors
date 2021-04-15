import Footer from '../partials/Footer'
import Navbar from '../partials/Navbar'
import Head from '../partials/header'
const Layout  = ({ children }) => {
    return (         
        <div className="content">
        <Head />
        <Navbar />
         { children }
        <Footer />
        </div>
     );
}
 
export default Layout ;
