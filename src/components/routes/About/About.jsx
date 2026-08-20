import AboutHero from "./AboutHero/AboutHero";
import AboutCards from "./AboutHero/HowItWorks";

const About = () => {
    return (
        <div className="max-w-360 w-full flex flex-col items-center gap-4 mx-auto">
            <AboutHero/>
            {/*<h2 className="text-3xl text-white">How it Works...</h2>
            <AboutCards/>*/}
        </div>
    );
};

export default About;