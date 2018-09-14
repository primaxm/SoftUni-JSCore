function search() {
    let searchtext = $('#searchText').val();

    let matchedElements = $(`ul#towns li:contains("${searchtext}")`);
    $("ul#towns li").css('font-weight', '');
    matchedElements.css('font-weight', 'bold');
    $('#result').text(matchedElements.length + " matches found.")
}