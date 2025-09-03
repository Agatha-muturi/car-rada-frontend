import {FaCar} from "react-icons/fa";
// import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <FaCar/>
            </div>
            <div className="nav-right">
                <h1>Car Rada </h1>
            </div>
            
        </nav>
    );
}
export default Navbar;  