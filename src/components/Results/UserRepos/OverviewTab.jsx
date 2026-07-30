import UserBio from "./UserBio"
import RenderRepos from "./RenderRepos"


const OverviewTab = ({resultObject, object}) => {
    return (
    <div>
        <UserBio resultObject={resultObject}/>
        <h4 className="p-4 text-xl border-b border-gray-200 font-bold">Top Repos</h4>
        <RenderRepos object={object}/>
    </div>
    );
};


export default OverviewTab;