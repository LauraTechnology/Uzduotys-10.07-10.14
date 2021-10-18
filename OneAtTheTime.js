// 12. console.log’e, naudojant ciklą atspausdinti
// skirtingus atsitiktinius
// skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).
// Ciklą kartoti
// kol bus sugeneruoti trys nelyginiai skaičiai/ ciklas sukasi, kol rodo 3 nelyginius;

/* 

1. kiek kartų ciklas pagal užduotį turi prasisukti? 
- Tiek kartų kol bus sugeneruoti 3 random nelyginiai skaičiai. 
Pasiūlymas: naudoti while(), kurio sąlygoje tikrinti ar nelyginių skaičių dar nėra 3;

2. kada pagal užduotį ciklas turi sustoti? 
- kai bus sugeneruoti 3 random nelyginiai skaičiai;

3. kas turi būti sugeneruojama kiekvieno ciklo metu? 
- console.log(randomSkaiciausKintamaji).
Pasiūlymas: ciklo viduje susikurti kintamajį kuris apskaičiuos random reikšmę nuo 0 iki 10;

4. kas turi būti nelyginis? 
- random nuo 0 iki 10 sugeneruotas skaičius. 
Pasiūlymas: patikrinti ar nelyginis naudoti if() kiekvieno ciklo metu;

5. kaip paskaičiuosi kiek nelyginių skaičių jau yra? 
- kievieno ciklo metu pridėti vienetą prie kintamojo jei if'o sąlyga, kad tai nelyginis suveikia

*/

let nelyginiuSkaiciuKiekis = 0;
let random = 0;

/* 
  kintamasis % 2 === 0   kaip lyginis
  kintamasis % 2 !== 0    kaip nelyginis

*/

/* while ciklas sukasi tol, kol nelyginiu skaiciu kiekis yra maziau arba lygu 3  */

while (nelyginiuSkaiciuKiekis < 3) {
  random = Math.floor(Math.random() * 11);

  if (random % 2 !== 0) {
    nelyginiuSkaiciuKiekis++;
  }

  console.log(random);
}
