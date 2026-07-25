import ProfileHeader from "./ProfileHeader";


const Profile = ({resultObject}) => {
    return (
        <div>
            <ProfileHeader 
            img={resultObject.avatar_url} profileName={resultObject.name} username={resultObject.login} bio={resultObject.bio}/>
        </div>
    );
};

export default Profile;