function usernames(arr) {
    let usernames = [];
    for (let i = 0; i < arr.length; i++) {
        let tmpUsername = arr[i].split("@");
        let tmpDomain = tmpUsername[1].split(".").map(a=> a[0]).join("");
        let us = tmpUsername[0]+"."+tmpDomain;
        usernames.push(us);
    }
    console.log(usernames.join(", "));
}

usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);