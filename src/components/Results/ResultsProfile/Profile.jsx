import ProfileHeader from "./ProfileHeader";
import ProfileBody from "./ProfileBody";


const Profile = ({resultObject}) => {
    return (
        <div className="bg-slate-50 p-4 border border-digital-blue-100 rounded-md shadow-sm text-gray-500">
            <ProfileHeader 
            img={resultObject.avatar_url} profileName={resultObject.name} username={resultObject.login} bio={resultObject.bio}/>
            <ProfileBody location={resultObject.location} link={resultObject.url} joined={resultObject.created_at}/>
        </div>
    );
};

export default Profile;