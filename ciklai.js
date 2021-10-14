// 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;
for (let i = 0; i < 5; i++) {
  console.log("Labas");
}

console.log("-------2------");

// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

console.log("-------3------");

// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);
for (let i = 0; i <= 40; i += 10) {
  console.log(i);
}

for (let i = 0; i <= 4; i++) {
  console.log(10 * i);
}

for (let i = 0; i <= 40; i++) {
  if (i % 10 === 0) {
    console.log(i);
  }
}

console.log("------4--------");

// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

for (let i = 49; i <= 53; i++) {
  console.log(i);
}

console.log("-----5-------");

// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

for (let i = 4; i >= 0; i--) {
  console.log(i);
}

console.log("-----6--------");

// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);

for (let i = 0; i <= 8; i += 2) {
  console.log(i);
}

// for (let i = 0; i <= 40; i += 10) {
//     console.log(i);
// }

console.log("------7-------");

// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 11));
}

console.log("--------------");

// KARTOJU KODĄ su savo susikurtais masyvais.
// atsitiktiniai skaiciai nuo 0 iki 25

console.log("------8-------");
// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;

let random;

while (random !== 5) {
  random = Math.floor(Math.random() * 11);
  console.log(random);
}

//
console.log("------9-------");
// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

// atsitiktinių skaičių SUMA

//let suma = 0;
//
// while (suma <= 100) {
//     random = Math.floor(Math.random() * 11)
//     console.log(random)
//     suma += random
//     console.log('suma yra', suma);
// }
//

console.log("-----10-------");
// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;

//ka reikia padaryti kiekvieno ciklo metu, kad gautume kiek kartu prasisuko ciklas
//kiekCikluPrasisuko

let randomm;
let kiekCikluPrasisuko = 0;

while (randomm !== 7 && randomm !== 5) {
  randomm = Math.floor(Math.random() * 11);
  console.log(randomm);
  kiekCikluPrasisuko += 1
  
}

    console.log('ciklas prasisuko kartų :', kiekCikluPrasisuko);

// likusiems uzdaviniams naudoti operatorius || (or) ir && (and)

console.log("------11-------");
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).            Ciklas turi pasibaigti tada, kai atsitiktinių skaičių SUMA viršija 20, bet ne anksčiau nei po 11 ciklų;

let suma = 0;

for (let i = 0; i < 11; i++) {
  if (suma <= 20) {
    random = Math.floor(Math.random() * 11);
    console.log(random);
    suma += random;
  }
  console.log("suma yra", suma);
}

console.log("------12-------");
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).              Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;

// random = Math.floor(Math.random() * 11)
//
// while (console.log(threeOddNumbers)) {
//     random = Math.floor(Math.random() * 11)
//
// }

console.log("------13-------");
// 13. console.log’e, naudojant ciklą atspausdinti PO PORĄ skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;

random = Math.floor(Math.random() * 11);

console.log("------14-------");
// 14. console.log’e, naudojant ciklą atspausdinti PO PORĄ skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).             Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;

random = Math.floor(Math.random() * 11);

console.log("------15-------");
// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje).                 Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
//
