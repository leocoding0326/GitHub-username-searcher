import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons/faCodeBranch";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const UserStats = ({followers, following, repos, gists, org}) => {
    return (
        <ul>
            <li>
                <FontAwesomeIcon icon={faUsers} />
                <p>{followers}</p>
                <p>Followers</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faUsers} />
                <p>{following}</p>
                <p>Following</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faCodeBranch} />
                <p>{repos}</p>
                <p>Repositories</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faStar} />
                <p>{gists}</p>
                <p>Gists</p>
            </li>
            <li>
                <FontAwesomeIcon icon={faBuilding} />
                <p>{org || 'N/A'}</p>
                <p>Organizations</p>
            </li>
        </ul>
    );
};

export default UserStats;