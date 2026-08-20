import { Zap,ShieldMinus,TabletSmartphone } from 'lucide-react'

const FeaturesCards = () => {
    return (
        <div className='flex py-10 flex-col'>
            <div className='flex gap-4'>
                <Zap className='text-digital-blue-400 bg-digital-blue-700 p-1 rounded-md' size={40}/>
                <div className='text-start text-sm flex flex-col gap-1'>
                    <h3 className='text-white font-bold'>Instant Result</h3>
                    <p className='text-gray-400'>Get real-time data from the GitHub API.</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturesCards;