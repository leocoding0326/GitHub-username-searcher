const userSearch = async (userInput) => {
    const baseUrl = 'https://api.github.com/';
    const endPoint = '/search/users';
    const query = `?q=${encodeURIComponent(userInput)}&per_page=5`;
    const urlToFetch = baseUrl + endPoint + query;
}