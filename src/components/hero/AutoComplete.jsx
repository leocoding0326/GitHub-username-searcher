import { Combobox } from "@base-ui/react";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import userSearch from "@/api/userSearch";
import { CircleX } from "lucide-react";
import { LoaderCircle } from "lucide-react";

const AutoComplete = ({value, onChange}) => {

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
            >
            <Combobox.InputGroup className={'flex items-center'}>

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
                className={'border border-digital-blue-100 p-2 rounded-md bg-slate-50 italic relative focus:outline-none focus:ring-1 focus:ring-digital-blue-200 focus:border-none shadow-md'}
              />
                <span className="absolute right-32 flex">
                    {isLoading ? <LoaderCircle className="animate-spin"/> : 
                    <Combobox.Clear onClick={()=>onChange(null)} >
                        <CircleX />
                    </Combobox.Clear>
                    }
                </span>
            </Combobox.InputGroup>
            <Combobox.Portal>
                <Combobox.Positioner>
                    <Combobox.Popup>
                        <Combobox.Status>
                            {isLoading && "Searching..."}
                        </Combobox.Status>
                        <Combobox.Empty>
                            {isLoading ? null : (!hasTyped ? 'Start Typing...' : 'User not found..')}
                        </Combobox.Empty>
                    <Combobox.List>
                        {(user) => (
                        <Combobox.Item value={user} key={user.id}>
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