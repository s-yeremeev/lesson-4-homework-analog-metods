//01. [concat](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/concat);

// 02. [filter](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter);
/**
 * Вызываем function arrElement() со подготовленным масивом данных и сравниваемым значением 2017
 * @param {Array} yearArray
 * @function arrElement
 */
const analogFilter = arrElement(yearArray, function(str) {
  return str == 2017
})

console.log(analogFilter);



// 03. [join](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join);
const arrayArg2 = function(arr, callback) {
  results =[]
  for (let i in arr) {
     let add = arr[i] + "-"
     results.push(add)
  }
  for (let i in results) {
    console.log(results[i])
  }
}

arrayArg2(yearArray)

// 04. [map](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map);

/**
 * Вызываем function arrayArg() со подготовленным масивом данных и возводим в степень
 * @param {Array} []
 * @function arrayArg
 * @method Math.pow
 */
let analogMap = arrayArg([1, 2, 3, 4], Math.pow);
console.log(analogMap);

// 05. [reduce](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

/**
 * Вызываем function arrayStartValue() со подготовленным масивом масивов и парсим его в 1 массив
 * @param {Array} reduceArray
 * @function arrayStartValue
 * @return {Array} results
 */
const analogReduce = arrayStartValue(reduceArray, function(results, current) {
  return results.concat(current);
}, []);

console.log(analogReduce);



// 06. [sort](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort);

// const sortan = function (arr) {
//  const cloneArray = Object.assign({}, arr)
//   const compare = function(a, b) {  
//     return (a < b) ? -1 : (a > b) ? 1 : 0;
//   }
// var minLength = Math.min.apply(null, arr)
// console.log(sortan(minLength))
// let results = []
//  for (let i in cloneArray) {
//     if(minLength < cloneArray[i]){
//       results.push(minLength)
//     }
// }
//   return results
// }

// arraySort = [5, 4]
// console.log(sortan(arraySort))

// 07. [splice](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice);
// 08. [slice](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/slice);


/**
 * Вызываем function arrayElementIndex() со подготовленным масивом и выводим элементы с 0 и 2 индексами
 * @param {Array} yearArray
 * @function arrayElementIndex
 */
const analogSlice = arrayElementIndex(yearArray, function(el, index) {
  if(index == 0 || index == 2){
     console.log(el)
  }
})

// 09. [find](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/find);

/**
 * Вызываем function arrayElementIndex() со подготовленным масивом и ищем в нем значение 2017
 * Выводим только первый, попавшийся
 * @param {Array} yearArray
 * @function arrayElementIndex
 */
const analogFind = arrayEinElement(yearArray, function(str) {
  return str == 2017
})

console.log(analogFind);


// 10. [reverse](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse).

/**
 * Вызываем function arrayElementFromTheEnd() со подготовленным масивом и ищем в нем значение 2017
 * Выводим только первый, попавшийся
 * @param {Array} numberArray
 * @function arrayElementFromTheEnd
 */
	let reserveArrayEnd = arrayElementFromTheEnd(numberArray);
	
  console.log(reserveArrayEnd); 