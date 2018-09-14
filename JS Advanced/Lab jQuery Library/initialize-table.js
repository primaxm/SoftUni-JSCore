function initializeTable() {
    createTR("Bulgaria", "Sofia");
    createTR("Germany", "Berlin");
    createTR("Russia", "Moscow");


    function createTR (country, capital) {
        let row = $('<tr>')
            .append(`<td>${country}</td>`)
            .append(`<td>${capital}</td>`)
            .append($('<td>')
                .append($("<a href='#'>[Up]</a>")
                    .on('click', moveUp)
                )
                .append($("<a href='#'>[Down]</a>")
                    .on('click', moveDown)
                )
                .append($("<a href='#'>[Delete]</a>")
                    .on('click', deleteRow)
                )
            );
        $('#countriesTable').append(row)
        hide()
    }

    $("#createLink").on('click', insertData);

    function insertData () {
        let country = $('#newCountryText');
        let capital = $('#newCapitalText');
        createTR(country.val(), capital.val());
        country.val('');
        capital.val('');
        hide()
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev())
        hide()
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next())
        hide()
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        hide()
    }

    function hide() {
        $('#countriesTable tr td a').css('display', '');
        $('#countriesTable tr:eq(2) td a:contains("Up")').css('display', 'none');
        $('#countriesTable tr:last td a:contains("Down")').css('display', 'none');
    }
}