import 'bootstrap/dist/css/bootstrap.css';
const SideGameComp =({gameTitle, price, img}) => (
    <div className="container mb-4">
        <div className="row">
            <div className="col-4">
                <img className=" img-fluid rounded-1"src={img} alt="game"/>
            </div>
            <div className="col-8 pt-1">
                <p className='text-white mb-1'>{gameTitle}</p>
                <p className='text-white mb-0' >{price}</p>
            </div>
        </div>
    </div>
)
export default SideGameComp;