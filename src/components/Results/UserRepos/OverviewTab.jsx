import ReposCards from "./ReposCards";

const OverviewTab = ({object}) => {
    return (
        <div>
            {object.map((repo=> {
               return <ReposCards 
               key={repo.id} 
               name={repo.name} 
               description={repo.description} 
               forks={repo.forks} 
               language={repo.language} 
               stars={repo.stargazers_count} 
               visibility={repo.visibility}/>
            }))}
        </div>
    );
};

export default OverviewTab;