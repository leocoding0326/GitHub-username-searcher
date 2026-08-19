import { UserSearch } from 'lucide-react';

const AboutCards = () => {
    return (
        <div className='bg-digital-blue-700 p-4'>
            <div className='flex gap-4'>
                <UserSearch className='bg-blue-600'/>
                <h3 className='text-lg font-bold'>Find Developers</h3>
            </div>
            <div>
                <p>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
            </div>
            <div className='flex gap-4'>
                <UserSearch className='bg-blue-600'/>
                <h3 className='text-lg font-bold'>Find Developers</h3>
            </div>
            <div>
                <p>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
            </div>
            <div className='flex gap-4'>
                <UserSearch className='bg-blue-600'/>
                <h3 className='text-lg font-bold'>Find Developers</h3>
            </div>
            <div>
                <p>Search GitHub by username and instantly access profiles with follower counts, repositories, and contribution stats.</p>
            </div>
        </div>
    );
};

export default AboutCards;