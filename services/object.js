export default {
    get: (axios, id, params) => axios.get(`/object/${id}`, params)
}