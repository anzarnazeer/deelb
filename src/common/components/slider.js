import { arrow, christmasNewyear, christmasTree } from "../images/images";
import Button from "./button";

const Slider = ({ className }) => {
    return (
        <div className={className}>
            <div className="left-arrow-container">
                <img src={arrow} alt="arrow" />
            </div>
            <div className="content">
            <div className="left">
                <img src={christmasNewyear} alt="logo" />
                <h1>Upto <span> 60% OFF</span></h1>
                <p>On every Order</p>
                <Button className={"shopnow"} buttonText={"Shop Now"} />
            </div>
            <div className="right">
                <img src={christmasTree} alt="tree" />
            </div>
            </div>
            <div className="right-arrow-container" >
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}
export default Slider;