import Layout from '../Layouts/layout.jsx';
import BannerComp from '../BannerComp/bannerComp.jsx';
import GameShop from '../GameShop/gameShop.jsx';
import Header from '../Header/header.jsx';
import 'bootstrap/dist/css/bootstrap.css';


const Home = () => (
    <>
    <Layout>
    <div className = 'container'>
      <BannerComp source='./photos/hzd-landscape.jpg'/> 
      <Header white='New' red='Games'/>
      <GameShop />
    </div> 
    </Layout>
    </>
    
);

export default Home;