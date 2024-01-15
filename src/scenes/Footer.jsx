import SocialMediaIcons from "../components/SocialMediaIcons"

const Footer = ()=>{
    return(
        <footer className="h-64 bg-blue pt-10">
            <div className="w-5/6 mx-auto text-black">
                <SocialMediaIcons/>
                <div className="md:flex justify-center md:justify-between text-center">
                    <p className="font-playfair font-semibold text-2xl text-gray">MOHD AMMAR</p>
                    <p className="font-playfair text-md font-bold">©️2024 AMMAR. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;