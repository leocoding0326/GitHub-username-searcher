import ReposCards from "./ReposCards";

const OverviewTab = ({object}) => {
    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6">
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