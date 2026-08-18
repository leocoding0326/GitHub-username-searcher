import HeroTitle from "./HeroTitle";
import SearchForm from "./SearchForm";

const Hero = ({handleOnSearch}) => {
    return (
        <div className='w-full flex flex-col items-center justify-center py-25 gap-15 px-4'>
          <HeroTitle />
          <SearchForm onSubmit={handleOnSearch}/>
        </div>
    )
}

export default Hero;