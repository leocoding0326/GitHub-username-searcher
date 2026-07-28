import { BookMarked, FileBraces, Star, GitFork } from 'lucide-react';

const ReposCards = () => {
    return (
        <div className="bg-slate-100 w-full h-auto flex flex-col p-4 border border-digital-blue-100 shadow-sm rounded-md">
            <div className='flex items-center'>
                <BookMarked />
                <h5 className='flex-1 ml-2 text-lg'>Spoon-Knife</h5>
                <div className='text-sm bg-green-600 px-2 py-1 rounded-xl text-white'>Public</div>
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