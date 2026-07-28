import { BookMarked, FileBraces, Star, GitFork } from 'lucide-react';

const ReposCards = () => {
    return (
        <div className="w-full h-auto flex flex-col p-4">
            <div className='flex'>
                <BookMarked />
                <h5 className='flex-1 ml-2'>Spoon-Knife</h5>
                <div>Public</div>
            </div>
            <p className='py-4'>This repo is for demonstration purposes only</p>
            <div className='flex justify-around'>
                <p className='flex items-center'><FileBraces size={20}/> JavaScript</p>
                <p className='flex items-center'><Star size={20}/>1.6k</p>
                <p className='flex items-center'><GitFork size={20}/>300</p>
            </div>
        </div>
    );
};

export default ReposCards;