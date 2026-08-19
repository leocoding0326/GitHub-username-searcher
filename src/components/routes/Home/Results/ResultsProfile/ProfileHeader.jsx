const ProfileHeader = ({img, profileName, username}) => {
    return (
        <div className="flex flex-col items-center gap-2 text-center border-b border-digital-blue-800 py-4">
            <div className="w-28 h-auto">
                <img src={img} className="w-full h-auto rounded-full"/>
            </div>
            <h4 className="text-xl font-bold text-white">{profileName}</h4>
            <h5 className="text-sm font-bold">@{username}</h5>
        </div>
    );
};

export default ProfileHeader;