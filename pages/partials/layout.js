import Navbar from './Navbar'
import Head from './header'
import Footer from './footer'
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
