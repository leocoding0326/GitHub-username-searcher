import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import loadingAnimation from './assets/loading.json'

const LoadingBar = () => {
    return (
        <div>
            <DotLottieReact data={loadingAnimation} loop autoplay/>
        </div>
    );
};

export default LoadingBar;