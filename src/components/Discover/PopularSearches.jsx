const PopularSearches = ({popularArray}) => {
    return (
        <div>
        <h3>Popular Searches</h3>
        <ul>
            {popularArray.map(user => (
  <li key={user}>{user}</li>
))}
        </ul>
        </div>
    );
};

export default PopularSearches;