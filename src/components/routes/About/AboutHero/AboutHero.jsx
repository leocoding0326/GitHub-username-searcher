import heroImg from '../../../../assets/aboutHeroGif.gif'

const AboutHero = () => {
    return (
        <section className='text-center md:h-[60vh] h-[30vh] flex flex-col items-center justify-center p-4 gap-6'>
            <h2 className='md:text-3xl text-md font-bold leading-relaxed'>Search, explore, and learn about developers and their work.</h2>
            <img src={heroImg} className='shadow-md rounded-md h-auto md:max-w-[80%]
            wide-full border border-digital-blue-100'/>
        </section>
    )
}

export default AboutHero