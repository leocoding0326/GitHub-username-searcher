const Stats = ({resultObject}) => {
    const stats = [
        {title: 'Followers', value: resultObject.followers},
        {title: 'Following', value: resultObject.following},
        {title: 'Repos', value: resultObject.public_repos}
    ];
    return (
        <div>
            {stats.map((stat => {
                <StatsCard 
                    key={1}
                    title={stat.title}
                    value = {stat.value}
                /> 
            }))}
        </div>
    );
}