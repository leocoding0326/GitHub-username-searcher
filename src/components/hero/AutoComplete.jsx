import { Combobox } from "@base-ui/react";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import userSearch from "@/api/userSearch";
import { CircleX } from "lucide-react";
import { LoaderCircle } from "lucide-react";

const AutoComplete = ({value, onChange, error}) => {

const [users, setUsers] = useState([]);
const [open, setOpen] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [hasTyped, setHasTyped] = useState(false);

const debouncedSearch = useMemo(
    () => 
        debounce(async (searchTerm) => {
            try {
                const results = await userSearch(searchTerm);
                setUsers(results)
            }
            catch(error) {
                console.log(`Something went wrong ${error}`)
            }
            finally {
                setIsLoading(false)
            }
        }, 600),
        [userSearch]
);

useEffect(() => {
    return () => {
        debouncedSearch.cancel();
    };
}, [debouncedSearch]);

console.log(isLoading)

console.log(users)

    return (
        <Combobox.Root 
            items={users}
            itemToStringLabel={(user) => user.login}
            value={value ? { login: value } : null}
            isItemEqualToValue={(item, val) => item.login === val.login}
            onValueChange={(user) => onChange(user ? user.login : "")}
            onOpenChange={setOpen}
            open={open}
            className="w-full min-[375px]:flex-1"
            >
            <Combobox.InputGroup className={'flex items-center flex-1  w-full min-[375px]:flex-1'}>

                <Combobox.Input placeholder="Enter the username..."
                onChange={(event) => {
                    const inputValue = event.target.value;
                    onChange(inputValue)
                    if(!inputValue) {
                        debouncedSearch.cancel();
                        setOpen(false)
                        setIsLoading(false)
                        setHasTyped(false)
                        return
                    }
                    setOpen(true);
                    debouncedSearch(inputValue);
                    setIsLoading(true);
                    setHasTyped(true);
                }}
                className={`border p-2 rounded-md bg-slate-50 italic relative focus:outline-none focus:ring-1 focus:ring-digital-blue-200 focus:border-none shadow-md flex-1 ${error ? 'ring-1 ring-red-500 focus:ring-red-500' : 'border border-digital-blue-100'}`}
              />
                <span className="absolute min-[375px]:right-30 right-4 flex">
                    {isLoading ? <LoaderCircle size={20} className="animate-spin text-gray-400 transition-all"/> : 
                    <Combobox.Clear onClick={()=>onChange(null)} >
                        <CircleX size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer"/>
                    </Combobox.Clear>
                    }
                </span>
            </Combobox.InputGroup>
            <Combobox.Portal>
                <Combobox.Positioner className="w-(--anchor-width)">
                    <Combobox.Popup className='bg-slate-50 border border-digital-blue-100 rounded-b-md mt-1 p-2'>
                        <Combobox.Status className='text-gray-400'>
                            {isLoading && "Searching..."}
                        </Combobox.Status>
                        <Combobox.Empty>
                            {isLoading ? null : (!hasTyped ? 'Start Typing...' : 'User not found..')}
                        </Combobox.Empty>
                    <Combobox.List>
                        {(user) => (
                        <Combobox.Item value={user} key={user.id} className='p-2 data-highlighted:bg-digital-blue-50 cursor-pointer'>
                            {user.login}
                        </Combobox.Item>
                        )}
                    </Combobox.List>
                    </Combobox.Popup>
                </Combobox.Positioner>
            </Combobox.Portal>

        </Combobox.Root>
    )
}

export default AutoComplete;