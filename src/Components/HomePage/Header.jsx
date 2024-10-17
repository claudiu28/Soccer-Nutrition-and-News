import imag_1_header from "../../assets/images/avif/sport_imag_1.avif"
import imag_2_header from "../../assets/images/webp/news.webp"
import imag_3_header from "../../assets/images/avif/nutrition_imag_2.avif"
import {useNavigate} from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <>
            <header>
                <section className = "header-text-section">
                    <h1>Sports and Nutrition</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="header-buttons">
                        <button onClick={() => navigate('/sport')}>See Sports</button>
                        <button onClick={() => navigate('/news')}>See News</button>
                    </div>
                </section>
                <section className="header-image-section">
                        <img src={imag_1_header} alt="imag_sport_1" className="img1"/>
                        <img src={imag_2_header} alt="imag_nutrition_2" className="img2"/>
                        <img src={imag_3_header} alt="imag_news_3" className="img3"/>
                </section>
            </header>
        </>
    );
}

export default Header;