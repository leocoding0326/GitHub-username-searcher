import SearchImage from "./SearchImage";
import DiscoverText from "./DiscoverTexts";
import Divider from "../Divider";
import PopularSearches from "./PopularSearches";
import discoverImg from "../../assets/discoverImg.svg";

const Discover = ({popularArray}) => {
    return (
        <div className="md:w-[80%] w-[90%] mb-10 flex flex-col items-center text-center justify-center shadow-md border-2 border-gray-300 rounded-xl p-6">
            
            <SearchImage src={discoverImg}/>
            <DiscoverText />
            <Divider />
            <PopularSearches popularArray={popularArray}/>

        </div>
    )
}

export default Discover;