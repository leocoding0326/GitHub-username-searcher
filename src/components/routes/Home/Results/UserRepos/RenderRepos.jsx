import {useState} from 'react';
import ReposCards from "./ReposCards";

const RenderRepos = ({object}) => {
    const [visibleCount, setVisibleCount] = useState(5)
    const visiblrRepos = object.slice(0, visibleCount)

    console.log(object)

    return (
        <>  
            {object.length === 0 ? <p className='text-center text-gray-400 py-10'>User have no repos...</p> :
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 py-6">
                {visiblrRepos.map((repo=> {
                return <ReposCards 
                key={repo.id} 
                name={repo.name} 
                description={repo.description} 
                forks={repo.forks} 
                language={repo.language} 
                stars={repo.stargazers_count} 
                visibility={repo.visibility}
                url={repo.html_url}/>
                }))}
            </div>
            }
            {visibleCount < object.length && (
                <div className='flex items-center justify-between py-4'>
                    <span className='h-px bg-digital-blue-800 flex-1'></span>
                        <button className='px-6 text-sm italic text-gray-400 underline hover:text-black hover:cursor-pointer'
                        onClick={() => setVisibleCount((prev) => prev + 5)}>
                            Load More...
                        </button>
                    <span className='h-px bg-digital-blue-800 flex-1'></span>
                </div>
            )}
         </>
    );
};

export default RenderRepos;