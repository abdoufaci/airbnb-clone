const Footer = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        xl:grid-cols-4 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800 my-5">
                <h5 className="font-bold">ABOUT</h5>
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800 my-5">
                <h5 className="font-bold">COMMUNITY</h5>
                <p>Accessibility</p>
                <p>This is not a real site</p>
                <p>It's a pretty awesome clone</p>
                <p>Refferals Accepted</p>
                <p>Abdou</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800 my-5">
                <h5 className="font-bold">HOST</h5>
                <p>Papa react</p>
                <p>Present</p>
                <p>Zeor to full stack developer</p>
                <p>Hundreds of Students</p>
                <p>Join Now</p>
            </div>
            <div className="space-y-4 text-xs text-gray-800 my-5">
                <h5 className="font-bold">SUPPORT</h5>
                <p>Help Center</p>
                <p>Trust & Safety</p>
                <p>Say Hi</p>
                <p>Easter Eggs</p>
                <p>For the win</p>
            </div>
        </div>
    )
}

export default Footer;