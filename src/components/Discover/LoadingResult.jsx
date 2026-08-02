import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import LoadingResult from "../assets/loadingResult.lottie?url"

const LoadingResult = () => {
    return (
        <div>
            <DotLottieReact src={LoadingResult} loop autoplay />
        </div>
    )
}

export default LoadingResult;