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
        control,
        formState: {errors, isSubmitting}
    } = useForm({
        mode: "onSubmit",
        reValidateMode: 'onSubmit',
        resolver: zodResolver(inputSchema)
    })


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="relative flex flex-col gap-1 justify-center w-full items-start">

            <div className="min-[375px]:flex-row flex flex-col gap-2 items-center w-full">

                <Controller 
                    control={control}
                    name="username"
                    render={({field}) => (
                            <AutoComplete onChange={field.onChange} value={field.value} error={errors.username}/>
                        )
                    }>
                </Controller>

                    <SearchButton isSubmitting={isSubmitting} />
            </div>
             {!errors.username 
                    ? <Tip /> 
                    : <div className="text-red-500 text-xs flex gap-1 items-center"><TriangleAlert size={13}/>{errors.username.message}</div>}
        </form>

    );
};

export default SearchForm;