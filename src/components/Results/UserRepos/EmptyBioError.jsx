import noBio from '../../../assets/noBio.svg';

const EmptyBio = () => {
    return (
        <div className=" p-6 flex flex-col justify-center items-center m-auto gap-6">
            <div className='w-40 h-auto'>
                <img src={noBio} alt="user bio not fund" />
            </div>
            <p className='text-gray-400'>User has not enter a Bio yet...</p>
        </div>
    );
};

export default EmptyBio;