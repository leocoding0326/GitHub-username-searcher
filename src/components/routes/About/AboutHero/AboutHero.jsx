import heroImg from '../../../../assets/aboutHeroGif.gif';

const AboutHero = () => {
    return (
        <section className='text-center h-100 grid grid-cols-1 sm:grid-cols-2 p-4 gap-6 items-center justify-center'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl font-bold leading-relaxed text-white'>Find any Github user in<span className='text-digital-blue-500'> seconds.</span></h2>
                <p className='text-white line-clamp-3'>Github Finder is a fast and beautiful tool that lets you search for any GitHub username and inntantly explore their profile, repositories, stats and more...</p>
            </div>
            <img src={heroImg} className='shadow-md rounded-md h-auto md:max-w-[80%]
            wide-full border border-digital-blue-100 mx-auto'/>
        </section>
    )
}

export default AboutHero