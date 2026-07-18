const Logo = ({imgSrc, altText}) => {
    return (
        <div>
            <img src={imgSrc} alt= {altText}/>
            <h1>GitHub Finder</h1>
        </div>
    )
};

export default Logo;