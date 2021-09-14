// const imie = Math.sqrt(10 + 6);
// console.log(imie);
// document.querySelector("body").innerHTML = `${imie}`

const pikus = {

    object1: dodaj = _ => {
        console.log('dodaj')
    },

    object2: function odejmij() {
        console.log('odejmij')
    },

    mnoz() {
        console.log('mnoz')
        console.log(pikus.a * pikus.leta())
    },

    a: 17,
    b: 2,

    leta: anon = _ => {
        return 11;
    }

}

// pikus.object1()
// pikus.object2()
// pikus.mnoz()

// let fruit = prompt("Which fruit to buy?");

// console.log(fruit)

// let bag = {
//   [fruit]: fruit, // the name of the property is taken from the variable fruit
// };

// alert( bag[fruit] );

const arr = []
// arr.push(4,3,5)

for (let i = 0; i < 10; i++) {
    // console.log(5)
    arr.push(i);
}

// console.log(arr)
for (let elem of arr) {
    console.log(elem)
}

for (let elem in arr) {
    console.log(elem)
}

for (let elem in pikus) {console.log(elem)}


// function sayHi() {   // (1) create
//     alert( "Hello" );
//   }
  
//   let func = sayHi;    // (2) copy
  
//   func(); // Hello     // (3) run the copy (it works)!
//   sayHi(); 