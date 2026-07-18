const Logo = ({imgSrc, altText}) => {
    return (
        <div className="max-w-full h-full flex gap-2 items-center">
            <img src={imgSrc} alt= {altText} className="max-h-7 w-auto -scale-x-100"/>
            <h1 className="font-bold text-3xl tracking-wide">Github<span className="text-digital-blue-500">Finder</span></h1>
        </div>
    )
};

export default Logo;