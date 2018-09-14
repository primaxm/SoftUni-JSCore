function attachEvents() {
    $('#items li').on('click', function () {
        if (this.hasAttribute("data-selected")) {
            $(this).removeAttr("data-selected").css("background", "")
        } else {
            $(this).attr("data-selected", true).css("background", "#DDD");
        }

    })


    $('#showTownsButton').on('click', function () {
        $('#selectedTowns').text('');
        let print = $('[data-selected]').toArray().map(el => $(el).text()).join(", ");
        $('#selectedTowns').text(print);
    })
}