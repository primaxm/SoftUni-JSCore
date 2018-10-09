function calendar(arr) {
    let inputDate = new Date(arr[2], arr[1]-1, arr[0]);
    let daysInMonth = new Date(arr[2], arr[1], 0).getDate();

    let y = inputDate.getFullYear();
    let m = inputDate.getMonth();
    let firstDay = new Date(y, m, 1);
    let lastDay = new Date(y, m + 1, 0);
    locale = "en-us";

    let rowNumber = 5;
    let firstDayNumber = firstDay.getDay();
    if (firstDayNumber === 0) firstDayNumber = 7;
    if (firstDayNumber-1 + daysInMonth > 35) rowNumber = 6;
    if (firstDayNumber-1 + daysInMonth <= 28) rowNumber = 4;

    $('#content').append($('<table>').append($(`<caption>${inputDate.toLocaleString(locale, { month: "long" })} ${inputDate.getFullYear()}</caption>`)).append($('<tbody id="tablebody">').append($('<tr>')
        .append($("<th>Mon</th>"))
        .append($("<th>Tue</th>"))
        .append($("<th>Wed</th>"))
        .append($("<th>Thu</th>"))
        .append($("<th>Fri</th>"))
        .append($("<th>Sat</th>"))
        .append($("<th>Sun</th>"))
        )));

    let totalcount = 0;
    let count = 1;
    for (let i = 1; i <= rowNumber; i++) {
        let row = $('<tr>').appendTo($('#tablebody'));
        for (let j = 1; j <= 7; j++) {
            let td;
            if ((j < firstDayNumber && i === 1) || (lastDay.getDate() < count && i === rowNumber)) {
                td = $('<td>').appendTo(row);
            } else {
                td = $(`<td>${count}</td>`).appendTo(row);
                if (count === inputDate.getDate()) {
                    td.addClass("today");
                }
                count++;
            }

            totalcount++;
        }

    }
}