const userSearch = async (userInput) => {
    const baseUrl = 'https://api.github.com/';
    const endPoint = 'https://api.github.com/';
    const input = userInput;
    const query = `?q=${encodeURIComponent(input)}&per_page=5`;
    
}