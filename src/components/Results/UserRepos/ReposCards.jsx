import { BookMarked } from 'lucide-react';

const ReposCards = () => {
    return (
        <div className="w-full h-auto">
            <div>
                <h5><BookMarked /> Spoon-Knife</h5>
                <div>Public</div>
            </div>
            <p>This repo is for demonstration purposes only</p>
            <div>
                <p>JavaScript</p>
                <p>1.6k</p>
                <p>300</p>
            </div>
        </div>
    );
};

export default ReposCards;