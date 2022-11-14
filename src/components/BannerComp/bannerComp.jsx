import SideGameComp from "../SideGameComp/sideGameComp";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
const BannerComp = ({ source }) => {
  const [bannerImage, setBanner] = useState(
    "../../../photos/hzd-landscape.jpg"
  );
  return (
    <div className="my-5 mx-5 p-0">
      <div className="row top-spacer">
        <div className="col col-lg-9 pt-5">
          <div className="">
            <img className="img-fluid rounded-1" src={bannerImage} alt="game" />
          </div>
        </div>
        <div className="col-sm-12 col-lg-3 mt-5">
          <SideGameComp
            defaultHeader={setBanner}
            gameTitle="Red Dead Redemption 2"
            price="$29.99"
            img="./photos/rdr2.jpg"
            gameHeader="https://res.cloudinary.com/dsysuymw2/image/upload/v1668459269/react-project/red-dead-redemption-2-review-feature-header-1200x630-c-ar1.91_o58ogo.jpg"
          />
          <SideGameComp
            defaultHeader={setBanner}
            gameTitle="Horizon Zero Dawn"
            price="$19.99"
            img="./photos/Horizon-zero-dawn.jpg"
            gameHeader="https://res.cloudinary.com/dsysuymw2/image/upload/v1668458996/react-project/hzd-landscape_lnmzhr.jpg"
          />
          <SideGameComp
            defaultHeader={setBanner}
            gameTitle="God of War"
            price="$39.99"
            img="./photos/god-of-war.jpg"
            gameHeader="https://res.cloudinary.com/dsysuymw2/image/upload/v1668459541/react-project/GameofWar_copy_negfrl.jpg"
          />
          <SideGameComp
            defaultHeader={setBanner}
            gameTitle="Uncharted 4"
            price="$24.99"
            img="./photos/uncharted-4.jpg"
            gameHeader="https://res.cloudinary.com/dsysuymw2/image/upload/v1668459261/react-project/uncharted-4-jeep_zw1ocr.jpg"
          />
          <SideGameComp
            defaultHeader={setBanner}
            gameTitle="GTA 5"
            price="$9.99"
            img="./photos/gta5.jpg"
            gameHeader="https://res.cloudinary.com/dsysuymw2/image/upload/v1668458050/react-project/grand-theft-auto-v-screen-02-ps4-en-22jul20_h1fw5w.webp"
          />
        </div>
      </div>
    </div>
  );
};
export default BannerComp;
