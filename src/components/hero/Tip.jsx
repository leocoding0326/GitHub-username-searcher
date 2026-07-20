import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-solid-svg-icons"

const Tip = () => {
    return (
    <p> 
        <FontAwesomeIcon icon={faLightbulb}/>   
        Tip: Try typing <span>"octocat", "torvalds"</span> or any GitHub username!
    </p>
    )
}

export default Tip;