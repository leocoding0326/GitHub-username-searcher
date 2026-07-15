const userSearch = async (inputSubmitted) => {
    const baseUrl = 'https://api.github.com';
    const endPoint = `/users/${inputSubmitted}`;
    const urlToFecth = baseUrl + endPoint;

    try {
        const response = await fetch(urlToFecth);

        const result = await response.json();
        return result

    } catch (error) {
        console.log(error)
    }
}

export default userSearch;