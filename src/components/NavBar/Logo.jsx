const Logo = ({imgSrc, altText}) => {
    return (
        <div className="max-w-full h-full flex gap-2 items-center">
            <img src={imgSrc} alt= {altText} className="max-h-7 w-auto -scale-x-100"/>
            <h1 className="hidden min-[300px]:inline font-semibold text-2xl tracking-wide font-notch">Github<span className="text-digital-blue-500">Finder</span></h1>
        </div>
    );
};

export default Logo;