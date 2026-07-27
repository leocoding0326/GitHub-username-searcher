const userRepos = async (username) => {
    
    if(!username) {
        return 
    };
    const url = new URL(`https://api.github.com/users/${username}/repos`)
    url.searchParams.set('sort', 'created');
    url.searchParams.set('direction', 'desc');

        const response = await fetch(url);

        if(!response.ok) {
            throw new Error(`Failed request ${response.status}`)
        }

        return response.json();
};

export default userRepos;