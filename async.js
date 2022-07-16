
const axios = require('axios')

export const fetchData = async (id) => {
const request = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    // console.log(request)
    return request
}
