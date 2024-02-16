import { deelbaba, avatar, wallet} from "../images/images";
import Button from "./button";


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src={deelbaba} alt="logo" />
            </div>
            <ul className="middle">
                <li>Home</li>
                <li>About Us</li>
                <li>Shop</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="right-section">
                <div className="img-container">
                    <img src={avatar} alt="avatar" />
                </div>
                <div className="img-container">
                <img src={wallet} alt="wallet" />
                    </div>
                <Button className={"login"} buttonText={"Login/Register"} />
            </div>
        </div>
    )
}
export default Navbar;
