import Layout from '../Layouts/layout.jsx';
import 'bootstrap/dist/css/bootstrap.css';


const GamePage = () => (
  <Layout>
  <div className="px-5">
  <div className='d-flex justify-content-center mt-2 ' >
    <img className='img-fluid rounded-1' src="./photos/hzd-landscape.jpg" alt='gameimage'></img>
  </div> 
    <div className='row mt-5 '>
      <div className='col-12 col-lg-7'>
        <div className=''><h1 className='text-white text-center text-lg-start'>Horizon Zero Dawn</h1></div>
        <p className='text-white text-center text-lg-start'>Publisher</p>
        <p className='text-white text-center text-lg-start'>Rating</p>
        <h4 className='text-white text-center text-lg-start'>$XX.XX</h4>
        <button type="button" class="btn text-white background-red">Add to Cart</button>
      </div>  
      <div className='col-12  col-lg-5 d-flex justify-content-center'>
        <img className='rounded-1 width-40 d-block'src="./photos/Horizon-zero-dawn.jpg" alt="game" ></img>
      </div>
    </div>
  </div>
  </Layout>
    
);

export default GamePage;