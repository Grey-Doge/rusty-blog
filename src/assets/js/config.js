const domain = 'http:localhost:8081/';
const articles = domain + 'articles/';
export const request = {
    getAllArticles: articles + 'getArticles/',
    getArticlesById: articles
}