import Footer from '../partials/Footer'
import Navbar from '../partials/Navbar'
const Layout  = ({ children }) => {
    return (         
        <div className="content">
        <Navbar />
         { children }
        <Footer />
        </div>
     );
}
 
export default Layout ;
