function increment(input) {
    $(input)
        .append($('<textarea>').addClass("counter").attr("disabled", "disabled").val(0))
        .append($('<button>').addClass("btn").attr('id', 'incrementBtn').text("Increment")
            .on('click', updateCounter)
        )
        .append($('<button>').addClass("btn").attr('id', 'addBtn').text("Add")
            .on('click', displayLi)
        )
        .append($('<ul>').addClass("results"));

    function updateCounter() {
        $('.counter').val(Number($('.counter').val())+1);
    }

    function displayLi() {
        let value = $('.counter').val();
        $('.results').append($("<li>").text(value));
    }
}