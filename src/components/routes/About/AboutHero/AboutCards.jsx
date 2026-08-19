import { UserSearch } from 'lucide-react';
import Divider from '@/components/Divider';

const AboutCards = () => {
    return (
    <div className='p-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4  text-slate-300'>
        <div className='bg-linear-to-b from-digital-blue-800 to-digital-blue-600 p-6 flex flex-col gap-6 rounded-md shadow-md border border-digital-blue-100'>
            <div className='flex gap-4 items-center border-b pb-4 border-gray-500'>
                <UserSearch className='bg-blue-500 p-2 rounded' size={40}/>
                <h3 className='md:text-2xl text-xl font-bold'>Find Developers</h3>
            </div>
            <p className='md:text-lg text-md leading-relaxed'>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
        </div>
        <div className='bg-digital-blue-700'>
            <div className='flex gap-4'>
                <UserSearch className='bg-blue-600'/>
                <h3 className='text-xl font-bold'>Find Developers</h3>
            </div>
            <p>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
        </div>
        <div className='bg-digital-blue-700'> 
            <div className='flex gap-4'>
                <UserSearch className='bg-blue-600'/>
                <h3 className='text-xl font-bold'>Find Developers</h3>
            </div>
            <p>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
        </div>
    </div>
    );
};

export default AboutCards;