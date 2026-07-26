const userResult = async (username) => {
    const url = new URL(`https://api.github.com/users/${username}/repos`)
    url.searchParams.set('sort', 'created');
    url.searchParams.set('direction', 'desc');
    url.searchParams.set('per_page', '10')
}