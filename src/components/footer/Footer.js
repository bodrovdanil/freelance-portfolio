import "./style.css"
import vk from "./../../img/icons/vk.svg"
import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"

const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                        <li className="social__item"><a href="https://vk.com/danilbs" target="_blank" rel="noopener noreferrer"><img src={vk} alt="vk" /></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="instagram" /></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="twitter" /></a></li>
                        <li className="social__item"><a href="https://github.com/bodrovdanil" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="gitHub" /></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="linkedIn" /></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer> );
}
 
export default Footer;