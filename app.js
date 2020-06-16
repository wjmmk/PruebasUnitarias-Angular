/*
import { objectify } from "tslint/lib/utils"

let freq = {}

const mot = (t) => {
  const getAllSums = (tree) => {
    if(!tree) {
      return 0
    }
    const sum = getAllSums(tree.left) + getAllSums(tree.right) + tree.value
    freq[sum] = (freq[sum] || 0) + 1
    console.log(sum);
    return sum;
  }

  getAllSums(t)

  const maxFreq = Object.values(freq).reduce( (mx, cur) => Math.max(mx, cur), 0)
  return Object.keys(freq)
        .filter(key => freq[key] === maxFreq)
        .map(key => parseInt(key))
        .sort( (a, b) => a - b)
}

var  t = {" value": 1, "left": { "value": 2, "left": null, "right":null}, "right": { "value": 3, "left": null, "right": null}}

mot(t)
*/


/*
for (var i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
} */

var myArray = [1, 2, 1, 3, 3, 1, 2, 1, 5, 1];
var repetidos = [];
var temporal = [];

myArray.forEach((value,index)=>{
  temporal = Object.assign([],myArray); //Copiado de elemento
  temporal.splice(index,1); //Se elimina el primer elemento q se compara
  /**
   * Se busca en temporal el elemento, y en repetido para
   * ver si esta ingresado el elemento al array. indexOf returna
   * -1 si el elemento no se encuetra
   **/
  if(temporal.indexOf(value)!=-1 && repetidos.indexOf(value)==-1)

   console.log('Estos son los histogramas: ', repetidos.push(value), '\n');


});

// Codigo que imprime los alumnos aprovados de un curso segun la calificacion.
let students = [
  {
    name: 'Alvaro',
    score: 3,
  },
  {
    name: 'Daniel',
    score: 4,
  },
  {
    name: 'Alexys',
    score: 2,
  },
  {
    name: 'Rafa',
    score: 1,
  },
  {
    name: 'William',
    score: 5,
  },
  {
    name: 'Sofia',
    score: 3.5,
  }
]

let approved = students.filter(student => student.score >= 3.5);
console.log('Estos fueron los Alumnos Aprobados: ', approved);

/*
// Esta forma es aplicando el Metodo filter()
const result = myArray.filter(number => number > 1);

console.log(result); */

/*
let arr = [1,2,3,3,4,5,5,5,5,5];
let rep = arr.keys();
for (const key of rep) {
  console.log(key); // imprime los indices desde los cuales se puede acceder al Array.
}


let unicos = new Set(arr);
for (let item of unicos){
// console.log(item);
}
console.log("Unicos: ", unicos); // Imprime los valores del array sin repetidos.

var arr3 = [1, 2, [3, 4, [5, 6]]];
let resul = arr3.flat(2);
console.log(resul); // Dvuelve el array (arr3) con sus elementos aplanados en un solo Array.
// [1, 2, 3, 4, 5, 6]
 */

/*
var array = [1,2,3,4,5];
// función que elimina el último elemento del array y añade nuevoElemento
function reemplazaElemento(array, nuevoElemento) {
  array.pop();
  array.push(nuevoElemento);
  return array;
}

console.log(reemplazaElemento(array, 'cinco'));
*/
