import UserBio from "./UserBio"
import RenderRepos from "./RenderRepos"
import EmptyBio from "./EmptyBioError";


const OverviewTab = ({resultObject, object}) => {
    return (
    <div className="p-6">
        <h4 className="pb-2 text-xl border-b border-digital-blue-800 font-bold text-white">About</h4>
        {!resultObject.bio ? <EmptyBio /> : <UserBio resultObject={resultObject}/>} 
        
        <h4 className="my-4 pb-2 text-xl border-b border-digital-blue-800 font-bold text-white">Top Repos</h4>
        <RenderRepos object={object}/>
    </div>
    );
};


export default OverviewTab;