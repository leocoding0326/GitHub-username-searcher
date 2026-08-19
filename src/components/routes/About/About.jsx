import AboutHero from "./AboutHero/AboutHero";
import AboutCards from "./AboutHero/AboutCards";

const About = () => {
    return (
        <div className="max-w-360 w-full flex flex-col items-center gap-4 mx-auto">
            <AboutHero/>
            <AboutCards/>
        </div>
    );
};

export default About;