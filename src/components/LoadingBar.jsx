import Lottie from 'lottie-react';
import loadingAnimation from './assets/loading.json'

const LoadingBar = ({size}) => {
    return (
        <div>
            <Lottie animationData={loadingAnimation} size={size}/>
        </div>
    );
};

export default LoadingBar;