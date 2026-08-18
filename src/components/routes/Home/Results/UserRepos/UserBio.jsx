const UserBio = ({resultObject}) => {
    return (
        <div>
            <p className="py-8">{resultObject.bio}</p>
        </div>
    );
};

export default UserBio;