const userResult = async (inputSubmitted) => {
    
    const baseUrl = 'https://api.github.com';
    const endPoint = `/users/${inputSubmitted}`;
    const urlToFecth = baseUrl + endPoint;

        const response = await fetch(urlToFecth);

        if(!response.ok) {
            throw new Error(`User not fund ${response.status}`)
        }

        return response.json();
}

export default userResult;