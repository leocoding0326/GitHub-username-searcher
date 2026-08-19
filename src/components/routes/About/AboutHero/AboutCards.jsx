import { UserSearch } from 'lucide-react';

const AboutCards = () => {
    return (
    <div className='p-4 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4'>
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