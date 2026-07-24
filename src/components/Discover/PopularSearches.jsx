import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const PopularSearches = ({popularArray, setSearch, setUsers}) => {

    const handlePopularClick = (user) => {
        setSearch(user);
    }

    return (
        <div className="w-full pb-4 flex flex-col gap-6">
            <h4 className="font-bold text-xl">Popular Searches</h4>
            <ul className="flex justify-around flex-wrap gap-4">
                {popularArray.map(user => (
                <li key={user}  onClick={() => handlePopularClick(user)}
                className="inline-block p-2 rounded-md border border-digital-blue-200 text-[#0066FF] hover:bg-digital-blue-50 transition-colors cursor-pointer"><FontAwesomeIcon icon={faUser} style={{color: '#0066FF'}}/> {user}</li>
                ))}
            </ul>
        </div>
    );
};

export default PopularSearches;