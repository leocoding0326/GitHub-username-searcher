import { BookMarked, FileBraces, Star, GitFork } from 'lucide-react';

const ReposCards = ({name, description, forks, language, stars, visibility, url }) => {
    return (
        <div className="bg-digital-blue-800 w-full min-h-50 flex flex-col p-4 border border-digital-blue-900 shadow-sm rounded-md">
            <div className='flex items-center flex-wrap'>
                <BookMarked/>
                <a href={url} target='_blank' className='flex-1 ml-2 text-lg font-bold text-digital-blue-500 hover:underline'>{name}</a>
                <div className='text-sm bg-green-700 px-2 py-1 rounded-xl text-white'>{visibility}</div>
            </div>
            <p className='py-6 flex-1 text-gray-400 flex items-center'>{description || 'User has not added a description'}</p>
            <div className='flex justify-around flex-wrap'>
                <p className='flex items-center gap-1 text-white'><FileBraces size={20}/>{language ?? 'unknown'}</p>
                <p className='flex items-center gap-1 text-white'><Star size={20} className='text-yellow-500'/>{stars}</p>
                <p className='flex items-center gap-1 text-white'><GitFork size={20} className='text-pink-400'/>{forks}</p>
            </div>
        </div>
    );
};

export default ReposCards;