import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const UserStats = ({followers, following, repos, gists, org}) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 p-4 bg-linear-to-b from-digital-blue-950 to-digital-blue-900 border border-digital-blue-800 rounded-md shadow-sm">
            <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUsers} className="text-digital-blue-400 text-2xl pb-2"/>
                <div>
                    <p className="font-bold text-xl text-white">{followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUsers} className="text-purple-400 text-2xl pb-2"/>
                <div>
                    <p className="font-bold text-xl text-white">{following}</p>
                    <p className="text-gray-400 text-sm">Following</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCodeBranch} className="text-pink-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl text-white">{repos}</p>
                <p className="text-gray-400 text-sm">Repositories</p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faBuilding} className="text-green-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl text-white">{org || 'N/A'}</p>
                <p className="text-gray-400 text-sm">Company</p>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl text-white">{gists}</p>
                <p className="text-gray-400 text-sm">Gists</p>
                </div>
            </div>
            
            
        </div>
    );
};

export default UserStats;