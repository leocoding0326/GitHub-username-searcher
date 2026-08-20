import heroImg from '../../../../assets/aboutHeroGif.gif';
import FeaturesCards from './FeaturesCards';

const AboutHero = () => {
    return (
        <section className='text-center min-h-screen grid grid-cols-1 sm:grid-cols-2 p-10 gap-6 items-center justify-center bg-linear-to-l from-digital-blue-500/40 to-transparent'>
            <div className='flex flex-col gap-6 items-start justify-center'>
                <h2 className='text-3xl font-bold leading-relaxed text-white text-start'>Find any Github user in<span className='text-digital-blue-500'> seconds.</span></h2>
                <p className='text-white text-start leading-relaxed'>Github Finder is a fast and beautiful tool that lets you search for any username and inntantly explore their profile, repositories, stats and more...</p>
                <FeaturesCards />
            </div>
            <img src={heroImg} className='shadow-lg rounded-md h-100 sm:h-130 w-auto border border-digital-blue-500 shadow-digital-blue-500 mx-auto'/>
        </section>
    )
}

export default AboutHero