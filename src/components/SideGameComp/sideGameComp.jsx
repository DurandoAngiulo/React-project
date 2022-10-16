import 'bootstrap/dist/css/bootstrap.css';
const SideGameComp =({gameTitle, price, img}) => (
    <div className="container bg-primary">
        <div className="row">
            <div className="col">
                <img className="w-25"src={img} alt="game"/>
            </div>
            <div className="col">
                <p>{gameTitle}</p>
                <p>{price}</p>
            </div>
        </div>
    </div>
)
export default SideGameComp;