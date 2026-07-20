import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import loadingAnimation from './assets/loading.lottie?url'

const LoadingBar = () => {
    return (
        <div className='h-8 w-8'>
            <DotLottieReact src={loadingAnimation} loop autoplay />
        </div>
    );
};

export default LoadingBar;