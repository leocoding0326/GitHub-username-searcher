import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";
import { useForm } from "react-hook-form";

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
            <SearchButton />
            <ClearButton />
        </form>
    );
};

export default SearchForm;