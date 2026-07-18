const Logo = ({imgSrc, altText}) => {
    return (
        <div className="max-w-full h-full flex ">
            <img src={imgSrc} alt= {altText} className="h-10 w-auto"/>
            <h1>GitHub Finder</h1>
        </div>
    )
};

export default Logo;