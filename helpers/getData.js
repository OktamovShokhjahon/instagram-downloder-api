const getData = async (url) => {
    const req = await fetch(url)
    const res = await req.json()

    return res
}

module.exports = getData