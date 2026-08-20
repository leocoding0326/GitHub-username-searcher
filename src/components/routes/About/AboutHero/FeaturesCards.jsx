import { Zap,ShieldMinus,TabletSmartphone } from 'lucide-react'

const FeaturesCards = () => {
    return (
        <div>
            <Zap className='text-digital-blue-400 bg-digital-blue-700 p-1 rounded-md' size={40}/>
            <div className='text-white text-start text-sm'>
                <h3>Instant Result</h3>
                <p>Get real-time data from the GitHub API.</p>
            </div>
        </div>
    );
};

export default FeaturesCards;