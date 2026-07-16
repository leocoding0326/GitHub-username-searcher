import StatsCard from "./StatsCard";

const ResultStats = ({resultObject}) => {
    const stats = [
        {title: 'Followers', value: resultObject.followers},
        {title: 'Following', value: resultObject.following},
        {title: 'Repos', value: resultObject.public_repos},
    ];
    return (
        <div>
            {stats.map((stat, index) => (
                <StatsCard 
                    key={stat.id ?? index}
                    title={stat.title}
                    value = {stat.value}
                /> 
            ))}
        </div>
    );
};

export default ResultStats;