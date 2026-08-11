import { Combobox } from "@base-ui/react";
import { useState, useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import userSearch from "@/api/userSearch";
import { CircleX } from "lucide-react";

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


console.log(users)

    return (
        <Combobox.Root 
            items={users}
            itemToStringValue={(user) => user.login}>
            <Combobox.InputGroup>

            <Combobox.Input placeholder="Enter the username..."
            onChange={(event) => {
                const value = event.target.value;
                if(!value) {
                    debouncedSearch.cancel();
                    return
                }
                debouncedSearch(value)
            }}
            />
            </Combobox.InputGroup>

            <Combobox.Portal>
                <Combobox.Positioner>
                    <Combobox.Popup>
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