function attachEventsListeners() {
    // TODO: attach click events to all buttons
    //24 hours/1440 minutes/86400 seconds
    document.getElementById('daysBtn').addEventListener('click', function () {convertDays()})
    document.getElementById('hoursBtn').addEventListener('click', function () {convertHours()})
    document.getElementById('minutesBtn').addEventListener('click', function () {convertMinutes()})
    document.getElementById('secondsBtn').addEventListener('click', function () {convertSeconds()})

    function convertDays() {
        let insertetdDays = document.getElementById('days').value;
        let hours = insertetdDays * 24;
        let minutes = insertetdDays * 1440;
        let seconds = insertetdDays * 86400;

        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertHours() {
        let insertedHours = document.getElementById('hours').value;
        let days = insertedHours / 24;
        let minutes = insertedHours * 60;
        let seconds = insertedHours * 3600;

        document.getElementById('days').value = days;
        document.getElementById('minutes').value = minutes;
        document.getElementById('seconds').value = seconds;
    }

    function convertMinutes() {
        let insertedMinutes = document.getElementById('minutes').value;
        let days = insertedMinutes / 1440;
        let hours = insertedMinutes / 60;
        let seconds = insertedMinutes * 60;
        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('seconds').value = seconds;
    }

    function convertSeconds() {
        let insertedSecinds = document.getElementById('seconds').value;
        let days = insertedSecinds / 86400;
        let hours = insertedSecinds / 3600;
        let minutes = insertedSecinds / 60;

        document.getElementById('days').value = days;
        document.getElementById('hours').value = hours;
        document.getElementById('minutes').value = minutes;
    }

}