import linkedIn from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                href="https://www.linkedin.com/in/ammarkhan575" 
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src={linkedIn} alt="linkedin" />
            </a>

            <a
                href="https://www.facebook.com/ammarkhan575" 
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src={facebook} alt="facebook" />
            </a>
            
            <a
                href="https://www.instagram.com/mohdammar5757" 
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src={instagram} alt="instagram" />
            </a>

            <a
                href="https://www.x.com/mohdammar575" 
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-50 transition duration-500"
            >
                <img src={twitter} alt="twitter" />
            </a>
        </div>
    )
}

export default SocialMediaIcons;