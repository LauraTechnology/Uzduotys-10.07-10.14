// 9. console.log’e, naudojant ciklą atspausdinti atsitiktinius skirtingus skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). Ciklas turi pasibaigti tada, kai atsitiktinių skaičių suma viršija 100;

// atsitiktinių skaičių SUMA

let suma = 0;

 while (suma <= 100) {
     random = Math.floor(Math.random() * 11)
     console.log(random)
     suma += random
     console.log('suma yra', suma);
 }

