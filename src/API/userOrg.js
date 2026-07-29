const userOrg = async (orgUrl) => {
    if(!username) {
        return
    }

    const response = await fetch(orgUrl)
    return response.json()
}

export default userOrg;