import SearchImage from "./SearchImage";
import DiscoverText from "./DiscoverTexts";
import discoverImg from "../../assets/discoverImg.svg";

const Discover = () => {
    return (
        <div className="h-[60vh] w-[80%]  mb-10 flex flex-col items-center text-center justify-center">
            
            <SearchImage src={discoverImg}/>
            <DiscoverText />

        </div>
    )
}

export default Discover;