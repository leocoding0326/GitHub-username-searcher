const logoSizes = {
    sm: {
        img: 'max-h-7', text: 'text-2xl', textVisibility: 'hidden min-[300px]:inline'
    },
    lg: {
        img: 'max-h-20', text: 'text-6xl', textVisibility: 'inline'
    }
};




const Logo = ({imgSrc, altText, size='sm'}) => {

    const {img, text, textVisibility} = logoSizes[size];

    return (
        <div className="max-w-full h-full flex gap-2 items-center">
            <img src={imgSrc} alt= {altText} className={`${img} w-auto -scale-x-100`}/>
            <h1 className={`${textVisibility} font-semibold ${text} tracking-wide font-notch text-white`}>Github<span className="text-digital-blue-500">Finder</span></h1>
        </div>
    );
};

export default Logo;