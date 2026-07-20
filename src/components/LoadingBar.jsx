import { DotLottieReact } from '@lottiefiles/dotlottie-react'; 
import loadingAnimation from './assets/loading2.lottie?url'

const LoadingBar = () => {
    return (
        <div className='h-20 w-20'>
            <DotLottieReact src={loadingAnimation} loop autoplay />
        </div>
    );
};

export default LoadingBar;