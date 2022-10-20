import SideGameComp from '../SideGameComp/sideGameComp';
import 'bootstrap/dist/css/bootstrap.css';
const BannerComp =({source}) => {
   return (
    <div className="container mt-5 p-0">
        <div className="row">
            <div className="col col-md-9 pt-5">
                <div className="">
                    <img className= "img-fluid rounded-1" src={source} alt="game"/>
                </div>
                
            </div>
            <div className="col-sm-12 col-md-3">
                <SideGameComp gameTitle='Red Dead Redemption 2' price='$29.99' img='./photos/rdr2.jpg'/>
                <SideGameComp gameTitle='Horizon Zero Dawn' price='$19.99' img='./photos/Horizon-zero-dawn.jpg'/>
                <SideGameComp gameTitle='God of War' price='$39.99' img='./photos/god-of-war.jpg'/>
                <SideGameComp gameTitle='Uncharted 4' price='$24.99' img='./photos/uncharted-4.jpg'/>
                <SideGameComp gameTitle='GTA 5' price='$9.99'img='./photos/gta5.jpg'/>
            </div>
        </div>
    </div>
)
};
export default BannerComp;