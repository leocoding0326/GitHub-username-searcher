const DiscoverText = ({userNotFound}) => {
    return (
        <div className="mt-2 max-w-prose">
            <h3 className="font-bold text-2xl mb-2">{!userNotFound ? 'Start Your Search' : 'Sorry, cannot find this user'}</h3>
            <p>{ !userNotFound ? 'Enter a GitHub username above to find user profiles, repositories, statistics and more.' : 'Please try a different username...'}</p>
        </div>
    );
};

export default DiscoverText;