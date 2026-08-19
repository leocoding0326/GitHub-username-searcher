import DiscoverText from "./DiscoverTexts.jsx";
import SearchImage from "./SearchImage";
import discoverImg from "../../../../assets/DiscoverImg.svg";
import notFoundImg from "../../../../assets/notFoundImg.svg";


const Discover = ({userNotFound}) => {
    return (
        <div className="md:w-[80%] w-[90%] flex flex-col items-center text-center justify-center shadow-md border-2 border-digital-blue-900 rounded-xl p-10 bg-linear-to-l from-digital-blue-900 to-digital-blue-800">
            
            <SearchImage src={!userNotFound ? discoverImg : notFoundImg}/>
            <DiscoverText userNotFound={userNotFound}/>
        </div>
    )
}

export default Discover;