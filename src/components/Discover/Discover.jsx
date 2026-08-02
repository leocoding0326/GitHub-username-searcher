import SearchImage from "./SearchImage";
import DiscoverText from "./DiscoverTexts";
import Divider from "../Divider";
import PopularSearches from "./PopularSearches";
import discoverImg from "../../assets/discoverImg.svg";

const Discover = ({popularArray, setSearch, setUsers, userNotFund}) => {
    return (
        <div className="md:w-[80%] w-[90%] flex flex-col items-center text-center justify-center shadow-md border-2 border-digital-blue-100 rounded-xl p-6 bg-slate-50">
            
            <SearchImage src={discoverImg}/>
            <DiscoverText />
            <Divider />
            <PopularSearches popularArray={popularArray} setSearch={setSearch} setUsers={setUsers}/>

        </div>
    )
}

export default Discover;