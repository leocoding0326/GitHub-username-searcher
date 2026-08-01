const userSearch = async (userInput) => {
    const baseUrl = 'https://api.github.com';
    const endPoint = '/search/users';
    const query = `?q=${encodeURIComponent(userInput)}&per_page=5`;
    const urlToFetch = baseUrl + endPoint + query;
    
        const response = await fetch(urlToFetch);
        if(!response.ok) {
            throw new Error('Username not found')
        }
        const result = await response.json();
        return result.items;
}

export default userSearch;
