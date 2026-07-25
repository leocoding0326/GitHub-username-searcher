const ProfileHeader = ({img, profileName, username, description}) => {
    return (
        <div>
            <img src={img} alt={description} />
            <h4>{profileName}</h4>
            <h5>{username}</h5>
            <p>{description}</p>
        </div>
    );
};

export default ProfileHeader;