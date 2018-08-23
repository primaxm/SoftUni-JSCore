function sortArray(arr) {


    let sortF = function (a, b) {
        if(a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else {
            return (a.localeCompare(b));
        }
    }

    console.log(arr.sort(sortF).join("\n"));
}

sortArray(["alpha", "beta", "gamma"]);
sortArray(["Isacc", "Theodor", "Jack", "Aaaa", "Harrison", "George"]);






