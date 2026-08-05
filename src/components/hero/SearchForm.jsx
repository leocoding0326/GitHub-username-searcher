import { useForm } from "react-hook-form";
import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";
import Tip from "./Tip";

const SearchForm = ({onSubmit}) => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting}
    } = useForm()


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex gap-1 p-2 justify-center items-center">
            <input type="text" 
            {...register(
                'username',{
                required: 'Please enter a valid username',
                }
            )}
            className={`border border-gray-300 rounded-md px-2 py-1 focus:outline-digital-blue-200 focus:outline-1 flex-1 bg-slate-50`}/>
            {!errors.username 
                ? <Tip /> 
                : <div>{errors.username.message}</div>}
            <SearchButton isSubmitting={isSubmitting}/>
            <ClearButton />
        </form>
    );
};

export default SearchForm;