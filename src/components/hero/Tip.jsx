import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

const Tip = () => {
    return (
    <p className="text-xs sm:text-center text-start"> 
        <FontAwesomeIcon icon={faLightbulb} style={{color: "rgb(255, 212, 59)",}}/>   
        Tip: Try typing <span className="text-digital-blue-600">"octocat", "torvalds"</span>
    </p>
    )
}

export default Tip;