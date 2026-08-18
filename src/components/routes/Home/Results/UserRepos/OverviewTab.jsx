import UserBio from "./UserBio"
import RenderRepos from "./RenderRepos"
import EmptyBio from "./EmptyBioError";


const OverviewTab = ({resultObject, object}) => {
    return (
    <div className="p-6">
        <h4 className="pb-2 text-xl border-b border-gray-200 font-bold">About</h4>
        {!resultObject.bio ? <EmptyBio /> : <UserBio resultObject={resultObject}/>} 
        
        <h4 className="my-4 pb-2 text-xl border-b border-gray-200 font-bold">Top Repos</h4>
        <RenderRepos object={object}/>
    </div>
    );
};


export default OverviewTab;