const ProfileHeader = ({img, profileName, username, bio='No Bio Fund'}) => {
    return (
        <div>
            <img src={img} alt={bio} />
            <h4>{profileName}</h4>
            <h5>@{username}</h5>
            <p>{bio || 'User has no bio yet'}</p>
        </div>
    );
};

export default ProfileHeader;