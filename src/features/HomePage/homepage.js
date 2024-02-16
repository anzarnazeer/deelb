import Button from "../../common/components/button";
import SearchBar from "../../common/components/searchBar";
import Navbar from "../../common/components/navBar";
import { cards, data, employers, features, promotion } from "../../common/constants/constants";
import './home.scss';
import Title from "../../common/components/title";
import ProfileCard from "../../common/components/profileCard";
import { lady, redirection } from "../../common/images/images";
import Cards from "../../common/components/cards";
import Employercard from "../../common/components/employerCard";
import Slider from "../../common/components/slider";
import Footer from "../Footer/footer";
import FeatureCard from "../../common/components/featureCard";
import Hamburger from "../Hamburger/hamburger";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hamburger />
            <div className="banner">
                <div className="banner-overlay"></div>
                <div className="banner-container">
                    <SearchBar />
                    <h2>opportunities waiting for you</h2>
                    <Title className={"heading"} titleText={"one solution for all your needs"} />
                    <p>you can get services products and everything from single window</p>
                    <div className="button">
                        <Button className={"explore"} buttonText={"Explore"} />
                        <img src={redirection} alt="redirection" />
                    </div>
                </div>
            </div>
            <section className="promotion">
                {promotion?.map((item) => {
                    const { id, text, content, logo } = item;
                    return (
                        <div className="promo" key={id}>
                            <div className="img-container">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className="promo-sub">
                                <h1>{text}</h1>
                                <p>{content}</p>
                            </div>
                            {(id === 1 || id ===2 || id ===3 )&& <hr/>}
                        </div>
                    )
                })}
                
            </section>
            <section className="service">
                <div className="left-section">
                    <h1 class="serviceText"><span>Get</span> a service or<span> offer</span> a service</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="right-section">
                    {data?.map((item) => {
                        return (
                            <ProfileCard item={item} />
                        )
                    })}
                </div>
            </section>
            <section class="purchase">
                <div className="purchase-content">
                    <div className="img-container">
                        <img src={lady} alt="lady" />
                    </div>
                    <div className="purchase-right">
                        <h1 className="purchase-text" >Purchase <span> everything as your </span> need </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <div className="button">
                            <Button className={"explore"} buttonText={"Explore"} />
                            <img src={redirection} alt="redirection" />
                        </div>
                        <div className="purchase-overlay"></div>
                    </div>
                </div>
            </section>
            <section className="card-section">
                <h2>Best deals</h2>
                <div className="card-flex">
                    {cards.map((item) => {
                        return ( <Cards item={item} /> )
                    })}
                </div>
            </section>

            <section className="christmas">
                <Slider className={"sliderOne"} />
            </section>
            <section className="employer">
                <div className="top-section">
                    <Title className={"employer-title"} titleText={"Find Your "} />
                    <hr className="line" />
                </div>
                <div className="bottom-section">
                    {employers.map((item) => {
                        return (
                            <Employercard item={item} />
                        )
                    })}
                </div>
            </section>
            <section className="features">
                <div className="features-top">
                    <Title className={"feature-title"} titleText={"Featured "} />
                    <hr className="line" />
                </div>
                <div className="features-bottom">
                    {features.map((items) => {
                        return (
                            <FeatureCard items={items} />
                        )
                    })}

                </div>
            </section>
            <section className="christmas-card">
                <Slider className={"sliderOne"} />
            </section>
            <Footer />
        </div>
    )
}
export default Home;