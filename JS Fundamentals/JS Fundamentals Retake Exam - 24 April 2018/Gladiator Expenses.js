function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    let count = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) expenses += helmetPrice;
        if (i % 3 === 0) expenses += swordPrice;
        if (i % 2 === 0 && i % 3 === 0) {
            expenses += shieldPrice;
            count++;
        }
        if (i % 2 === 0 && i % 3 === 0 && count % 2 === 0) {
            expenses += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200)