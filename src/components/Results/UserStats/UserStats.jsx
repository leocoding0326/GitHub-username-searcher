import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const UserStats = ({followers, following, repos, gists, org}) => {
    return (
        <ul className="flex p-4 justify-around bg-slate-50 border border-digital-blue-100 rounded-md shadow-sm">
            <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUsers} className="text-digital-blue-400 text-2xl pb-2"/>
                <div>
                    <p className="font-bold text-xl">{followers}</p>
                    <p className="text-gray-400 text-sm">Followers</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faUsers} className="text-purple-400 text-2xl pb-2"/>
                <div>
                    <p className="font-bold text-xl">{following}</p>
                    <p className="text-gray-400 text-sm">Following</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faCodeBranch} className="text-pink-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl">{repos}</p>
                <p className="text-gray-400 text-sm">Repositories</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl">{gists}</p>
                <p className="text-gray-400 text-sm">Gists</p>
                </div>
            </li>
            <li className="flex items-center gap-4">
                <FontAwesomeIcon icon={faBuilding} className="text-green-400 text-2xl pb-2"/>
                <div>
                <p className="font-bold text-xl">{org || 'N/A'}</p>
                <p className="text-gray-400 text-sm">Organizations</p>
                </div>
            </li>
        </ul>
    );
};

export default UserStats;