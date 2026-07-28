import { BookMarked } from 'lucide-react';

const ReposCards = () => {
    return (
        <div className="w-full h-auto flex flex-col p-4">
            <div className='flex'>
                <BookMarked />
                <h5 className='flex-1 ml-2'>Spoon-Knife</h5>
                <div>Public</div>
            </div>
            <p className='py-4'>This repo is for demonstration purposes only</p>
            <div>
                <p>JavaScript</p>
                <p>1.6k</p>
                <p>300</p>
            </div>
        </div>
    );
};

export default ReposCards;