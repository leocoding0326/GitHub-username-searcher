const ProfileHeader = ({img, profileName, username, bio='No Bio Fund'}) => {
    return (
        <div>
            <div className="w-28 h-auto">
                <img src={img} alt={bio} className="w-full h-auto rounded-full"/>
            </div>
            <h4>{profileName}</h4>
            <h5>@{username}</h5>
            <p>{bio || 'User has no bio yet'}</p>
        </div>
    );
};

export default ProfileHeader;