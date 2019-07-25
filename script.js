"use strict";
//task 1
let array = ['Кот', 'Собака', 'Жираф'];
let word = 'Кот';
function searchArrayWord(array, word){
  for(let i = 0; i < array.length; i ++){
      if( array[i] === word){
         return true; 
      }
  return false;
   } 
}
console.log(searchArrayWord(array, word));

//task 2
let arr = [1, 2, 3, 7, 6, 9]; 
function findAverage(arg){
  let sum = 0;
  for (let i = 0; i < arg.length; i++ ){ 
  sum += arg[i];
} let average = sum / arg.length;
  return average;
}
console.log(findAverage(arr));

//task 3
let numbers = [1, 3, 5, 7, 9, 11];
let srebmun = [];
for (let i = numbers.length - 1; i >= 0; i--) {
      srebmun.push(numbers[i]);
}
numbers = srebmun;
console.log(srebmun);

//task 4

const name =  {html:'HTML', css: 'CSS', js: 'ECMA'}; 
console.log(Object.values(name));

//task 5

const obg = {
  'name' : 'Dima',
  'phone' : '0937681723',
  'adress' : 'Almaznaya, 11/39',
  'totalCost' : 830,
  'totalWeight' : 2700,
  'buyingGoods' : [{'goods' : 'Чашка', 'price' : 100,'weight' : 200},
                    {'goods' : 'Ложка', 'price' : 30, 'weight' : 100},
                    {'goods' : 'Чайник', 'price' : 550,'weight' : 2000},
                    {'goods' : 'Кружка', 'price' : 150,'weight' : 400}
  ] 
}
console.log(obg);
