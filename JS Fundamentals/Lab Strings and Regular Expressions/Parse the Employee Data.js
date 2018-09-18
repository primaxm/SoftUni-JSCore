function parseTheEmployeeData(arr) {
    for (let i = 0; i < arr.length; i++) {
        let data = arr[i].match(/^([A-Z][a-zA-Z]*)\s-\s([1-9][0-9]*)\s-\s([a-zA-Z0-9- ]+)$/);
        if (data) {
            console.log(`Name: ${data[1]}`);
            console.log(`Position: ${data[3]}`);
            console.log(`Salary: ${data[2]}`);
        }
    }
}

parseTheEmployeeData(["Isacc - 1000 - CEO",
    "Ivan - 500 - Employee",
    "Peter - 500 - Employee"]);

parseTheEmployeeData(["Jonathan - 2000 - Manager",
"Peter- 1000- Chuck",
"George - 1000 - Team Leader "]);