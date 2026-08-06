import { useForm } from "react-hook-form";
import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";
import Tip from "./Tip";
import {TriangleAlert} from "lucide-react";

const SearchForm = ({onSubmit}) => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        clearErrors,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "onSubmit",
        reValidateMode: 'onSubmit'
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-1 p-2 justify-center">
            <div className="flex w-full gap-2 items-center">
                    <input type="text" 
                    {...register(
                        'username',{
                        required: 'This field cannot be empty',
                        }
                    )}
                    className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-2 py-1 focus:outline-digital-blue-200 focus:outline-1 w-full bg-slate-50 flex-1`}/>
                    <SearchButton isSubmitting={isSubmitting}/>
                    {watch('username') && <ClearButton onClear = {() => reset()}/>}
            </div>
                {!errors.username 
                    ? <Tip /> 
                    : <div className="text-red-500 text-xs flex gap-1 items-center"><TriangleAlert size={13}/>{errors.username.message}</div>}
            
            
        </form>
    );
};

export default SearchForm;