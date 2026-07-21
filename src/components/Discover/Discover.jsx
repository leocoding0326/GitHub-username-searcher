import SearchImage from "./SearchImage";
import discoverImg from "../../assets/discoverImg.svg";

const Discover = () => {
    return (
        <div className="h-[60vh] w-[80%] rounded-md shadow-sm mb-10 border border-gray-100 flex flex-col items-center">
            <div>
                <SearchImage src={discoverImg}/>
            </div>
        </div>
    )
}

export default Discover;