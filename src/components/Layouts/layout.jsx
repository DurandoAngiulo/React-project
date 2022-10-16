import Footer from '../Footer/footer.jsx';
import Navbar from '../Navbar/navbar.jsx';
import BannerComp from '../BannerComp/bannerComp.jsx';
import CatagoryButtonContainer from '../CatagoryButtonContainer/catagoryButtonContainer.jsx';
import GameContainer from '../GameContainer/gameContainer.jsx';


const Layout = ({ children }) => (
  <>
  <main>
    <Navbar />
    <BannerComp />
    <CatagoryButtonContainer />
    <GameContainer />
    {children}
  </main>
  <Footer />
  </>  
);

export default Layout;