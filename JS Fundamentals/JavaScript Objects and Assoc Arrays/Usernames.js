function usernames(arr) {
    console.log(arr.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => {
        let tmp = Array.from(a).length - Array.from(b).length;
        if (Array.from(a).length === Array.from(b).length) {
            return a.localeCompare(b);
        }
        return tmp;
    }).join("\n"));
}

usernames(["Denise",
    "Ignatius",
    "Iris",
    "Isacc",
    "Indie",
    "Dean",
    "Donatello",
    "Enfuego",
    "Benjamin",
    "Biser",
    "Bounty",
    "Renard",
    "Rot",
    "Denise"])