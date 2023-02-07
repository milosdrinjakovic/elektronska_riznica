export default {
    articles: (axios, params) => axios.get(`/news`, {params}),
    article: (axios, id, params) => axios.get(`/news/${id}`, {params}),
}
