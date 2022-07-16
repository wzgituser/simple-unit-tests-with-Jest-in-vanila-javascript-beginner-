
const axios = require('axios')

export const fetchData = async (id) => {
const request = await axios.get(`https://dummyjson.com/products/${id}`)
    // console.log(request)
    return request
}

