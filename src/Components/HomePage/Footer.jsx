import logos from "../../assets/images/webp/logo_webpage.webp"
const Footer = () => {
    const navLinks = ["Home","Sport", "Nutrition", "News", "About", "Contact"];
    const socials = {
        "Github":"https://github.com/claudiu28",
        "LinkedIn":"https://www.linkedin.com/in/claudiu-dr%C4%83ghi%C8%9B%C4%83-a39199295/",
        "Instagram":"https://www.instagram.com/claudiu.draghita/",
    }
    return (
        <>
            <img src={logos} alt="logos"/>
            <ul>
                {navLinks.map(
                    (item) => {
                        return (<li key={crypto.randomUUID()}>{item}</li>)
                    }
                )}
            </ul>
            <ul>
                {Object.entries(socials).map(
                    ([social,url]) => {
                        return (<li key={url}>{social}</li>)
                    }
                )}
            </ul>
            <input type="text"/>
            <p>Copyright Sports,News and Nutrition</p>
        </>
    );
}

export default Footer;