function triangleOfStars(num) {
        for (let i = 1; i <= num; i++) {
           console.log("*".repeat(i))
        }
        for (let j = num-1; j >= 1; j--) {
            console.log("*".repeat(j))
        }
}

triangleOfStars(5)