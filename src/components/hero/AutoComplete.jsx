import { Combobox } from "@base-ui/react";
import { useState } from "react";
import userSearch from "@/api/userSearch";

const AutoComplete = () => {

const [users, setUsers] = useState([]);

const debouncedSearch = useMemo(
    () => 
        debounce(async (value) => {
            try {
                const results = await userSearch(value);
                setUsers(results)
            }
            catch(error) {
                console.log(`Something went wrong ${error}`)
            }
        }, 600),
        [userSearch]
);

useEffect(() => {
    return () => {
        debouncedSearch.cancel();
    };
}, [debouncedSearch]);



    return (
        <Combobox.Root 
            items={users}
            itemToStringValue={(user) => user.login}>

            <Combobox.Input placeholder="Enter the username..."
            onValueChange= {(value) => {
                if(!value) {
                    debouncedSearch.cancel();
                    return
                }
                debouncedSearch(value);
            }}
            />

        </Combobox.Root>
    )
}

export default AutoComplete;