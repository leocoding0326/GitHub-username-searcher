import { BookMarked, FileBraces, Star, GitFork } from 'lucide-react';

const ReposCards = ({name, description, forks, language, stars, visibility }) => {
    return (
        <div className="bg-slate-50 w-full min-h-50 flex flex-col p-4 border border-digital-blue-100 shadow-sm rounded-md">
            <div className='flex items-center'>
                <BookMarked className='text-gray-700'/>
                <h5 className='flex-1 ml-2 text-lg font-bold text-digital-blue-700'>{name}</h5>
                <div className='text-sm bg-green-600 px-2 py-1 rounded-xl text-white'>{visibility}</div>
            </div>
            <p className='py-6 flex-1 text-gray-500 flex items-center'>{description || 'User has not added a description'}</p>
            <div className='flex justify-around flex-wrap'>
                <p className='flex items-center gap-1'><FileBraces size={20}/>{language}</p>
                <p className='flex items-center gap-1'><Star size={20} className='text-yellow-500'/>{stars}</p>
                <p className='flex items-center gap-1'><GitFork size={20} className='text-pink-400'/>{forks}</p>
            </div>
        </div>
    );
};

export default ReposCards;