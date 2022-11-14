import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import anime from "animejs/lib/anime.es.js";
const SideGameComp = ({ gameTitle, price, img, defaultHeader, gameHeader }) => {
  const [isHover, setIsHover] = useState(false);

  const hoverOn = () => {
    setIsHover(true);
  };
  const hoverOff = () => {
    setIsHover(false);
    console.log("Hovered off");
  };
  const boxStyle = {
    //...
    backgroundColor: isHover ? "#272525" : "transparent",
  };

  return (
    <div
      style={boxStyle}
      onMouseOver={hoverOn}
      onMouseOut={hoverOff}
      onClick={() => defaultHeader(gameHeader)}
      className="container mb-sm-1 mb-4 rounded p-2 "
    >
      <div className="row">
        <div className="col-2 col-lg-3">
          <img className=" img-fluid rounded-1" src={img} alt="game" />
        </div>
        <div className="col-8 pt-1">
          <p className="text-white mb-1">{gameTitle}</p>
          <p className="text-white mb-0">{price}</p>
        </div>
      </div>
    </div>
  );
};
export default SideGameComp;
