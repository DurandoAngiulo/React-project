import 'bootstrap/dist/css/bootstrap.css';
const Header = ({white, red}) => (
    <h1 className="text-white fst-italic">{white} <span className="red">{red}</span></h1>
  )
export default Header;