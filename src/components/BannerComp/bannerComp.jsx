import SideGameComp from '../SideGameComp/sideGameComp';
import 'bootstrap/dist/css/bootstrap.css';
const BannerComp =() => (
   
    <div className="container">
        <div className="row">
            <div className="col col-md-6">
                <img src="https://via.placeholder.com/400/400" alt="game"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <SideGameComp gameTitle='test' price='00.00' img='./photos/rdr2.jpg'/>
                <SideGameComp gameTitle='test' price='00.00'/>
                <SideGameComp gameTitle='test' price='00.00'/>
                <SideGameComp gameTitle='test' price='00.00'/>
                <SideGameComp gameTitle='test' price='00.00'/>
            </div>
        </div>
    </div>
)
export default BannerComp;