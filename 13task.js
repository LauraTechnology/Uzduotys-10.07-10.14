// 13. console.log’e, naudojant ciklą atspausdinti
// PO PORĄ skirtingų atsitiktinių skaičių
// nuo 0 iki 10 (abu skaičiai vienoje eilutėje).
// Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

/*  kadangi salyga praso POROS skaiciu, susikuriam PORA kintamuju */

/* 

ciklas sukasi, kol 0 = 1 (randomA !== randomB)
ciklas sustotu, kai 0 = 0

*/

let randomA = 0;
let randomB = 1;

while (randomA !== randomB) {
  randomA = Math.floor(Math.random() * 11);
  randomB = Math.floor(Math.random() * 11);

  console.log(randomA, randomB);
}
