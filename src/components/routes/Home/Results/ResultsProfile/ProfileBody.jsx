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
        <ul className="flex flex-col gap-4 p-4 justify-center min-[1200px]:items-start items-center">
            <li><FontAwesomeIcon icon={faLocationDot}/> {location}</li>
            <li className="text-digital-blue-500"><FontAwesomeIcon icon={faLink}/> <a href={link} className="hover:underline">Git Profile</a></li>
            <li><FontAwesomeIcon icon={faCalendarDay}/> {joinedDate}</li>
        </ul>
    );
};

export default ProfileBody;