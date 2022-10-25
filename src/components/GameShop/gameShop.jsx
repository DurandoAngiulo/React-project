import GameCard from "../GameCard/gameCard.jsx";
const GameShop =() => (
   
    <div className="container p-0  mt-5">
        <div className="row  d-flex justify-content-center justify-content-md-between">
        <div className="col-auto"><GameCard name='Red Dead Redemption 2'  price='$59.99' source='./photos/rdr2.jpg' /></div>
        <div className="col-auto"><GameCard name='Red Dead Redemption 2'  price='$59.99' source='./photos/rdr2.jpg' /></div>
        <div className="col-auto"><GameCard name='Red Dead Redemption 2'  price='$59.99' source='./photos/rdr2.jpg' /></div>
        <div className="col-auto"><GameCard name='Red Dead Redemption 2'  price='$59.99' source='./photos/rdr2.jpg' /></div>
        <div className="col-auto"><GameCard name='Red Dead Redemption 2'  price='$59.99' source='./photos/rdr2.jpg' /></div>       
        </div>
    
    </div>
)
export default GameShop;