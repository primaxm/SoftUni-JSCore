function timer() {
    let time = 0;
    let intervalId = null;

    $('#start-timer').on('click', startTimer);
    $('#stop-timer').on('click', stopTimer);

    function startTimer (){
        $('#start-timer').attr('disabled', true);
        $('#stop-timer').removeAttr('disabled');

        if (intervalId === null) {
            intervalId = setInterval(increment, 1000);
        }
    }

    function increment() {
        time++;
        let hours = ("0" + Math.floor(time / 3600)).slice(-2);
        let hRest = time % 3600;
        let minutes = ("0" + Math.floor(hRest / 60)).slice(-2)
        let seconds = ("0" + hRest % 60).slice(-2)

        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }

    function stopTimer() {

        $('#start-timer').removeAttr('disabled');
        $('#stop-timer').attr('disabled', true);
        clearInterval(intervalId);
        intervalId = null;
    }
}