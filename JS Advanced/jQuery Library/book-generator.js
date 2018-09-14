function createBook(selector, title, author, isbn) {
    let element = $(`${selector}`);

    let generate = (function () {
        let id = 1;
        return function (selector, title, author, isbn) {
            let innerDiv = $(`<div id=\"book${id}\" border="none"></div>`).text("kuku")
                .append($(`<p class="title">${title}</p>`))
                .append($(`<p class="author">${author}</p>`))
                .append($(`<p class="isbn">${isbn}</p>`));
            let selectBtn = $("<button>Select</button>").appendTo(innerDiv);
            let deselectBtn = $("<button>Deselect</button>").appendTo(innerDiv);
            innerDiv.appendTo(element);

            selectBtn.on('click', () => innerDiv.css("border", "2px solid blue"));
            deselectBtn.on('click', () => innerDiv.css("border", "none"));
            id++;
        }

    }())

    generate(selector, title, author, isbn)
}