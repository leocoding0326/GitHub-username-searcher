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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" 
            {...register(
                'username',{
                required: 'Please enter a valid username',
                }
            )}/>
            {!errors.username 
                ? <Tip /> 
                : <div>{errors.username.message}</div>}
            <SearchButton isSubmitting={isSubmitting}/>
            <ClearButton />
        </form>
    );
};

export default SearchForm;