import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

const ProfileBody = ({location, link, joined}) => {
    const joinedDate = new Date(joined).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

    return (
        <ul className="[&>li]:p-1 mt-2">
            <li><FontAwesomeIcon icon={faLocationDot}/> {location}</li>
            <li className="text-digital-blue-500"><FontAwesomeIcon icon={faLink}/> <a href={link}>{link}</a></li>
            <li><FontAwesomeIcon icon={faCalendarDay}/> {joinedDate}</li>
        </ul>
    );
};

export default ProfileBody;