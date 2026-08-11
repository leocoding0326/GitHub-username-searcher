import { useForm } from "react-hook-form";
import {TriangleAlert} from "lucide-react";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";
import Tip from "./Tip";


const SearchForm = ({onSubmit}) => {

    const inputSchema = z.object ({
        username: z.string()
        .min(1, 'Please enter an username')
        .min(3, 'Username is too short')
        .max(34, 'Github doesnt allow more than 34 characters')
    });

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "onSubmit",
        reValidateMode: 'onSubmit',
        resolver: zodResolver(inputSchema)
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-1 p-2 justify-center">

            <div className="flex w-full gap-2 items-center">
                    <input type="text" 
                    {...register('username')}
                    className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-2 py-1 focus:outline-digital-blue-200 focus:outline-1 w-full bg-slate-50 flex-1`}
                    />

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