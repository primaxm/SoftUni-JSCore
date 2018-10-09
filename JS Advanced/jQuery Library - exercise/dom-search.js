function domSearch(selector, caseSensitive) {
    $(`selector`).addClass("items-control");
    let addDiv = $('<div class="add-controls"></div>')
        .append($('<label>Enter text: </label>')
            .append($('<input id="addtext" type="text">')))
        .append('<a class="button" id="add" href="#" style="dispaly: inline-block;">Add</a>');

    let searchDiv = $('<div class="search-controls"></div>')
        .append($('<label>Search: </label>')
            .append($('<input id="searchtext" type="text">')))

    let resultDiv = $('<div class="result-controls"></div>')
        .append($('<ul class="items-list"></ul>'))

    addDiv.appendTo($(selector));
    searchDiv.appendTo($(selector));
    resultDiv.appendTo($(selector));

    $('#add').on('click', addElement);

    function addElement() {
        $('.items-list').append($('<li class="list-item">')
            .append($('<a class="button" href="#">X</a>'))
            .append($('<strong></strong>').append($('#addtext').val())))


        $('li a').on('click', function () {
            $(this).parent().remove();
        });
        $('#addtext').val('');
    }

    $('#searchtext').on('change', selectElement);

    function selectElement () {
        let inputVal = $(this).val();

        $('.list-item strong').parent().attr('style', 'display: block;');
        if ($(this).val() !== '') {
            if (caseSensitive) {
                let regex = new RegExp(inputVal);
                $('.list-item strong').toArray().filter(elm => !regex.test(elm.textContent)).map(elm => elm.parentElement.style = "display: none;");
           } else {
                let regex = new RegExp(inputVal.toLowerCase());
                $('.list-item strong').toArray().filter(elm => !regex.test(elm.textContent.toLowerCase())).map(elm => elm.parentElement.style = "display: none;");
           }
        }
    }
}