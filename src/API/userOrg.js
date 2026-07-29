const userOrg = async (orgUrl) => {
    if(!orgUrl) {
        return
    }

    const response = await fetch(orgUrl)
    return response.json()
}

export default userOrg;