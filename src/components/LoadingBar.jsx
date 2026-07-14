import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from './assets/loading.json'

console.log(Lottie)
const LoadingBar = () => {
    return (
        <div>
            <Lottie animationData={loadingAnimation}/>
        </div>
    );
};

export default LoadingBar;