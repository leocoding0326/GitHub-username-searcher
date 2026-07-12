const userSearch = async (userInput) => {
    const baseUrl = 'https://api.github.com';
    const endPoint = '/search/users';
    const query = `?q=${encodeURIComponent(userInput)}&per_page=5`;
    const urlToFetch = baseUrl + endPoint + query;
    
    try {
        const response = await fetch(urlToFetch);
        if(!response.ok) {
            console.log('Theres been an error')
            return
        }
        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.log(error)
    }
}

export default userSearch;
