import heroImg from '../../../../assets/aboutHeroGif.gif'

const AboutHero = () => {
    return (
        <section className='text-center h-100 flex flex-col items-center justify-center p-4 gap-6'>
            <h2 className='sm:text-3xl text-lg font-bold leading-relaxed text-white'>Search, explore, and learn about developers and their work.</h2>
            <img src={heroImg} className='shadow-md rounded-md h-auto md:max-w-[80%]
            wide-full border border-digital-blue-100'/>
        </section>
    )
}

export default AboutHero