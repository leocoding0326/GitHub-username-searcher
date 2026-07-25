const ProfileHeader = ({img, profileName, username, bio}) => {
    return (
        <div>
            <img src={img} alt={description} />
            <h4>{profileName}</h4>
            <h5>{username}</h5>
            <p>{bio}</p>
        </div>
    );
};

export default ProfileHeader;