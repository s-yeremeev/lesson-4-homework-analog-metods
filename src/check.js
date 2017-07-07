//01. [concat]
/**
 * Вызываем function concatFunction() и передаем в нее 2 массива
 * на выходе получаем новый массив, объединенный из передаваемых
 * @param {Array} yearArray
 * @function arrElement
 */
const analogConcat = concatFunction(yearArray , numberArray)

console.log(analogConcat);

// 02. [filter]
/**
 * Вызываем function arrElement() со подготовленным массивом данных
 * и сравниваем со значением 2017
 * @param {Array} yearArray
 * @function arrElement
 */
const analogFilter = arrElement(yearArray, function(str) {
  return str == 2017
})

console.log(analogFilter);


// 03. [join]
/**
 * Вызываем function arrayJoin() со подготовленным массивом данных 
 * и выводим поле String с данными с массива, в качестве разделителя
 * используется "---" 
 * @param {Array} yearArray
 * @function arrayJoin
 */
const analogJoin = arrayJoin(yearArray)

console.log(analogJoin)


// 04. [map]
/**
 * Вызываем function arrayArg() со подготовленным массивом данных
 * и возводим в степень равную индексу поля в массиве
 * @param {Array} []
 * @function arrayArg
 * @method Math.pow
 */
let analogMap = arrayArg([1, 2, 3, 4], Math.pow);

console.log(analogMap);


// 05. [reduce]
/**
 * Вызываем function arrayStartValue() со подготовленным массивом масивов
 * и парсим его в 1 массив
 * @param {Array} reduceArray
 * @function arrayStartValue
 * @return {Array} results
 */
const analogReduce = arrayStartValue(reduceArray, function(results, current) {
  return results.concat(current);
}, []);

console.log(analogReduce);


// 06. [sort]
/**
 * Вызываем function arraySorting() со подготовленным массивом
 * и сортируем его по возрастанию
 * @param {Array} numberSorting
 * @function arraySorting
 */
const analogSort = arraySorting(numberSorting)
console.log(analogSort)


// 07. [splice]
/**
 * Вызываем function arrayElementIndex() со подготовленным массивом
 * и переносим в уже подготовленные массив(с новыми данными, на месте удаленных) последние 2 элемента.
 * Т.е. этим мы удаляем из исходного начальные элементы.
 * @param {Array} yearArray
 * @function arrayElementIndex
 */
const analogSplice = arrayElementIndex(yearArray, function(el, index) {
  if(index >= 4) {
     spliceArray.push(el)
  }
  return spliceArray
})

console.log(spliceArray);


// 08. [slice]
/**
 * Вызываем function arrayElementIndex() со подготовленным массивом
 * и выводим элементы с 0 по 2 индекс
 * @param {Array} yearArray
 * @function arrayElementIndex
 */
const sliceArray = []
const analogSlice = arrayElementIndex(yearArray, function(el, index) {
  if(index == 0 || index <= 2) {
     sliceArray.push(el)
  }
  return sliceArray
})

console.log(sliceArray);


// 09. [find]
/**
 * Вызываем function arrayEinElement() со подготовленным массивом
 * и ищем в нем значение 2017
 * Выводим только первый, попавшийся
 * @param {Array} yearArray
 * @function arrayElementIndex
 * @return {Array} str
 */
const analogFind = arrayEinElement(yearArray, function(str) {
  return str == 2017
})

console.log(analogFind);


// 10. [reverse]
/**
 * Вызываем function arrayElementFromTheEnd() со подготовленным массивом
 * и переварачиваем значения в новый массив
 * @param {Array} numberArray
 * @function arrayElementFromTheEnd
 */
	let reserveArrayEnd = arrayElementFromTheEnd(numberArray);
	
  console.log(reserveArrayEnd); 