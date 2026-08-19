import heroImg from '../../../../assets/aboutHeroGif.gif'
import { CodeXml } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className='text-center md:h-[40vh] h-[30vh] flex flex-col gap-2 items-center justify-center p-4'>
            <h2 className='md:text-3xl text-md font-bold leading-relaxed'>Search, explore, and learn about developers and their work.</h2>

            <img src={heroImg} className='shadow-md rounded-md h-auto max-w-[80%] border border-digital-blue-100'/>
        </section>
    )
}

export default AboutHero