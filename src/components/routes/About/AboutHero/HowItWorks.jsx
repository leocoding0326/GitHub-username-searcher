import { UserSearch } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { TrendingUp } from 'lucide-react';

const HowItWorks = () => {
    return (
    <div className='py-10 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  text-slate-300 justify-center items-center'>
        <div className='col-span-full text-center py-2'>
            <h2 className='text-digital-blue-500'>HOW IT WORKS</h2>
            <h3 className="text-2xl text-white sm:text-3xl">Simple.Fast.Powerful.</h3>
        </div>

        <div className='bg-linear-to-l from-digital-blue-900 to-digital-blue-800 p-6 flex flex-col gap-6 rounded-md shadow-md border border-digital-blue-800'>
            <div className='flex gap-4 items-center border-b pb-4 border-digital-blue-800'>
                <UserSearch className='bg-blue-500 p-2 rounded' size={40}/>
                <h3 className='text-xl font-bold'>Find Developers</h3>
            </div>
            <p className='leading-relaxed'>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
        </div>
        <div className='bg-linear-to-r from-digital-blue-900 to-digital-blue-800 p-6  justify-center flex flex-col gap-6 rounded-md shadow-md border border-digital-blue-800'>
            <div className='flex gap-4 items-center border-b pb-4 border-digital-blue-800'>
                <CodeXml className='bg-pink-700 p-2 rounded' size={40}/>
                <h3 className='text-xl font-bold'>Explore Repos</h3>
            </div>
            <p className='leading-relaxed'>Browse public repositories with language info, star counts, and descriptions. Filter by language, stack and much more.</p>
        </div>
        <div className='bg-linear-to-r from-digital-blue-900 to-digital-blue-800 p-6  justify-center flex flex-col gap-6 rounded-md shadow-md border border-digital-blue-800'>
            <div className='flex gap-4 items-center border-b pb-4 border-digital-blue-800'>
                <TrendingUp className='bg-emerald-700 p-2 rounded' size={40}/>
                <h3 className='text-xl font-bold'>Quick Stats</h3>
            </div>
            <p className='leading-relaxed'>Get real-time GitHub data including followers, following, public repos, organizations, and latest gists.</p>
        </div>
    </div>
    );
};

export default HowItWorks;