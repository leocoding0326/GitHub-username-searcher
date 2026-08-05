import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";
import { useForm } from "react-hook-form";

const SearchForm = () => {

    const {
        register,
        handleSubmit
    } = useForm()


    return (
        <form>
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