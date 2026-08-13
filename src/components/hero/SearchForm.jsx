import { useForm, Controller } from "react-hook-form";
import {TriangleAlert} from "lucide-react";
import {z} from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import SearchButton from "./SearchButton";
import Tip from "./Tip";
import AutoComplete from "./AutoComplete";


const SearchForm = ({onSubmit}) => {

    const inputSchema = z.object ({
        username: z.string()
        .min(1, 'Please enter an username')
        .min(3, 'Username is too short')
        .max(34, 'Github doesnt allow more than 34 characters')
    });

    const {
        handleSubmit,
        reset,
        watch,
        control,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "onSubmit",
        reValidateMode: 'onSubmit',
        resolver: zodResolver(inputSchema)
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-1 p-2 justify-center">

            <div className="flex w-full gap-2 items-center">

                <Controller 
                    control={control}
                    name="username"
                    render={({field}) => (
                            <AutoComplete onChange={field.onChange} value={field.value}/>
                        )
                    }>
                </Controller>

                   {/* <input type="text" 
                    {...register('username')}
                    className={`border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md px-2 py-1 focus:outline-digital-blue-200 focus:outline-1 w-full bg-slate-50 flex-1`}
                    />*/}

                    <SearchButton isSubmitting={isSubmitting}/>
            </div>

                {!errors.username 
                    ? <Tip /> 
                    : <div className="text-red-500 text-xs flex gap-1 items-center"><TriangleAlert size={13}/>{errors.username.message}</div>}
        </form>

    );
};

export default SearchForm;