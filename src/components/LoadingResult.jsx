import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoadingResultAnimation from "./assets/loadingResultAnimation.lottie?url"

const LoadingResult = () => {
    return (
        <div className="h-50">
            <DotLottieReact src={LoadingResultAnimation} loop autoplay />
        </div>
    )
}

export default LoadingResult;