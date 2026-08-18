import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoadingResultAnimation from "../../../../assets/loadingResultAnimation.lottie?url"

const LoadingResult = () => {
    return (
        <div>
            <DotLottieReact src={LoadingResultAnimation} loop autoplay />
        </div>
    )
}

export default LoadingResult;