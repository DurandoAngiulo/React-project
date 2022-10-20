import Navbar from '../Navbar/navbar.jsx';
import BannerComp from '../BannerComp/bannerComp.jsx';
import GameShop from '../GameShop/gameShop.jsx';
import Header from '../Header/header.jsx';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => (
    <>
    <Navbar />
    <div className = 'container'>
      <BannerComp source='./photos/hzd-landscape.jpg'/> 
      <Header white='New' red='Games'/>
      <GameShop />
    </div>  
    </>
    
);

export default Home;