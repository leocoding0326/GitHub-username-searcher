import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const ProfileBody = ({location, link, joined}) => {
    return (
        <ul>
            <li><FontAwesomeIcon icon={faLocationDot}/>{location}</li>
            <li><FontAwesomeIcon icon={faLink}/><a href={link}>{link}</a></li>
            <li><FontAwesomeIcon icon={faCalendarDay}/>{joined}</li>
        </ul>
    );
};

export default ProfileBody;