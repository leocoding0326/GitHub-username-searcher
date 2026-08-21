import AboutHero from "./AboutHero/AboutHero";
import HowItWorks from "./AboutHero/HowItWorks";
import TheStack from "./AboutHero/TheStack";


const About = () => {
    return (
        <div className="max-w-360 w-full flex flex-col items-center gap-4 mx-auto">
            <AboutHero/>
            <HowItWorks/>
            <TheStack />
        </div>
    );
};

export default About;