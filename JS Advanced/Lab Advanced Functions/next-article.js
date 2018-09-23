function getArticleGenerator(articles) {
    return function setArticle() {
        if (articles.length > 0) {
            $('#content').append(`<article border="1 color: solid-blue">${articles.shift()}</article>`);
        }

    }
}