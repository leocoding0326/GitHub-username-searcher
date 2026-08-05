import ClearButton from "./ClearButton";
import SearchButton from "./SearchButton";

const SearchForm = ({}) => {
    return (
        <form>
            <input type="text" />
            <SearchButton />
            <ClearButton />
        </form>
    );
};

export default SearchForm;