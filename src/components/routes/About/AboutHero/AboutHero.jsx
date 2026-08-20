import heroImg from '../../../../assets/aboutHeroGif.gif';

const AboutHero = () => {
    return (
        <section className='text-center h-100 flex flex-col items-center justify-center p-4 gap-6'>
            <h2 className='sm:text-3xl text-3xl font-bold leading-relaxed text-white'>Search and learn about developers and <span className='text-digital-blue-500'>their work.</span></h2>
            <img src={heroImg} className='shadow-md rounded-md h-auto md:max-w-[80%]
            wide-full border border-digital-blue-100'/>
        </section>
    )
}

export default AboutHero