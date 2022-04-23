import Navbar from "./Navbar";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

const Layout = ({children}) => {
    return (
        <div className='content'>
            <Navbar />
            <SideMenu />
            { children }
        </div>
    );
}
 
export default Layout;