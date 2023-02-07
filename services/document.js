export default {
    get: (axios, id, params) => axios.get(`/document/${id}`, params)
}