import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import loadingAnimation from './assets/loading.lottie?url'

const LoadingBar = () => {
    return (
        <div>
            <DotLottieReact src={loadingAnimation} loop autoplay/>
        </div>
    );
};

export default LoadingBar;