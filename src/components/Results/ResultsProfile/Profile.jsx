import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";


const Profile = ({resultObject}) => {
    return (
        <div>
            <ProfileHeader 
            img={resultObject.avatar_url} profileName={resultObject.name} username={resultObject.login} bio={resultObject.bio}/>
            <ProfileBody location={resultObject.location} link={resultObject.url} joined={resultObject.created_at}/>
        </div>
    );
};

export default Profile;