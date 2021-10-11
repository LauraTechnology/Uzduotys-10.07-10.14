 // 1. console.log’e, naudojant ciklą atspausdinti penkias eilutes ‘Labas’;

    console.log('Labas');
    console.log('Labas');
    console.log('Labas');
    console.log('Labas');
    console.log('Labas');

 console.log('-------2------');


// 2. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje);

 const skaiciai = [0, 1, 2, 3, 4];

    console.log(skaiciai[0]);
    console.log(skaiciai[1]);
    console.log(skaiciai[2]);
    console.log(skaiciai[3]);
    console.log(skaiciai[4]);

console.log('-------3------');


// 3. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje);

const desimtys = [0, 10, 20, 30, 40];

for (let i = 0; i < desimtys.length; i++ ) {
    console.log(desimtys[i]);
}

console.log('------4--------');


// 4. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje);

const dvigubiSkaiciai = [49, 50, 51, 52, 53];


for (let i = 0; i < dvigubiSkaiciai.length; i++ ) {
    console.log(dvigubiSkaiciai[i]);
}

console.log('-----5-------');


// 5. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 4 3 2 1 0 (vienas skaičius vienoje eilutėje);

const skaiciaiReverse = [4, 3, 2, 1, 0];


for (let i = 0; i < skaiciaiReverse.length; i++ ) {
    console.log(skaiciaiReverse[i]);
}

console.log('-----6--------');


// 6. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 2 4 6 8 (vienas skaičius vienoje eilutėje, daugybos konsolėje nenaudoti!, if’ų nenaudoti, ciklas for);
const lyginiaiSkaiciai = [0, 2, 4, 6, 8];

for (let i = 0; i < lyginiaiSkaiciai.length; i++) {
    console.log(lyginiaiSkaiciai[i]);
}

console.log('------7-------');


// 7. console.log’e, naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje);

function getRandomNumber(max) {
     return Math.floor(Math.random() * max);
}

console.log(getRandomNumber(10));
console.log(getRandomNumber(10));
console.log(getRandomNumber(10));
console.log(getRandomNumber(10));
console.log(getRandomNumber(10));

console.log('--------------');

// KARTOJU KODĄ su savo susikurtais masyvais.
// atsitiktiniai skaiciai nuo 0 iki 25


function getRandomNumber2(max) {
    return Math.floor(Math.random() * max);
}


console.log(getRandomNumber2(25));

console.log('------8-------');
// 8. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5;
 //function getRandomNumberTask8(max) {
 //    return Math.floor(Math.random() * max);
 //}
  
function getRandomNumberTask8(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomNumberTask8(10));


 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
 //console.log(getRandomNumberTask8(10));
//
//
console.log('------9-------');
// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;
// function getRandomNumberTask9(max) {
//     return Math.floor(Math.random() * max);
// }
// 
// console.log();


















console.log('-----10-------');
// 10. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko;
console.log('------11-------');
// 11. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 20, bet ne anksčiau nei po 11 ciklų;
console.log('------12-------');
// 12. console.log’e, naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklą kartoti kol bus sugeneruoti trys nelyginiai skaičiai;
console.log('------13-------');
// 13. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti tol, kol neiškris abu vienodi skaičiai;
console.log('------14-------');
// 14. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Skaičiuoti abiejų skaičių sumas skirtinguose kintamuosiuose. Ciklą kartoti tol, kol kiekviena iš sumų bus daugiau nei 100;
console.log('------15-------');
// 15. console.log’e, naudojant ciklą atspausdinti po porą skirtingų atsitiktinių skaičių nuo 0 iki 10 (abu skaičiai vienoje eilutėje). Ciklą kartoti kol bus sugeneruota po tris arba daugiau nelyginių skaičių.
// 