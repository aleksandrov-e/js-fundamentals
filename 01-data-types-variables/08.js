function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
  let expenses = 0;
  let shieldBreaks = 0;

  for (let i = 1; i <= lostFights; i++) {

    let helmetBroken = false;
    let swordBroken = false;

    if (i % 2 === 0) {
      expenses += helmetPrice;
      helmetBroken = true;
    }

    if (i % 3 === 0) {
      expenses += swordPrice;
      swordBroken = true;
    }

    if (helmetBroken && swordBroken) {
      expenses += shieldPrice;
      shieldBreaks++;

      if (shieldBreaks % 2 === 0) {
        expenses += armorPrice;
      }
    }
  }

  console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
solve(7,
2,
3,
4,
5
)