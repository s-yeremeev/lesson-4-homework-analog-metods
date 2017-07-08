/**
 * Вызываем function concatFunction() с 2 массивами и объединяем их новый
 * Исходные массивы не меняются
 * @param {Array} arr
 * @param {Array} arr2
 * @return {Array} concatArray
 */
const concatFunction = function(arr, arr2) {
  const concatArray = []
  for(let i in arr){
      concatArray.push(arr[i])
  }
  for(let i in arr2){
      concatArray.push(arr2[i])
  }
  return concatArray
}


/**
* Функция arrElement выполняет указанную функцию один раз для каждого элемента в массиве. 
* На выходе получаем новый массив элементов.
* Исходный массив не меняется.
*
* @function arrElement
* @param {Array} arr
* @param {Function} callback
* @param {argument} arg
* @return {Array} results
*/
const arrElement = function (arr, callback, arg) {
  results = [];
  for (let i in arr) {
    if (callback.call(arg, arr[i], i, arr)) {
       results.push(arr[i]);
    }
  }
  return results;
}

/**
* Функция arrayJoin выполняет указанную функцию один раз для каждого элемента в массиве.
* Работает как аналогия метода join() 
* На выходе получаем новое поле, заполненное данными с массива, значения разделены "---".
* Исходный массив не меняется.
*
* @function arrayJoin
* @param {Array} arr
* @param {Function} callback
* @return {String} stringBuilder
*/
const arrayJoin = function(arr, callback) {
  let stringBuilder = ""
  for (let i in arr) {
     let add = stringBuilder + arr[i] + "---"
     stringBuilder = add
  }

  return stringBuilder
}

/**
* Функция arrayArg выполняет указанную функцию один раз для каждого элемента в массиве. 
* На выходе получаем новый массив.
* Исходный массив не меняется.
*
* @function arrayArg
* @param {Array} arr
* @param {Function} callback
* @param {argument} arg
* @return {Array} results
*/
const arrayArg = function(arr, callback, arg) {
  results = [];
  for (let i in arr) {
      results.push(callback.call(arg, arr[i], i, arr));
  }
  return results;
};

/**
* Функция arrayStartValue выполняет указанную функцию один раз для каждого элемента в массиве. 
* На выходе получаем новый массив.
* Исходный массив не меняется.
*
* @function arrayStartValue
* @param {Array} arr
* @param {Array} startValue
* @param {Function} callback
* @return {Array} results
*/
const arrayStartValue = function(arr, callback, startValue) {
  let results = startValue;
  for (let i in arr) {
    results = callback.call(null, results, arr[i], i, arr);
  }
  return results;
};

/**
* Функция arrayElementIndex выполняет указанную функцию один раз для каждого элемента в массиве. 
* На выходе получаем новый массив c элементами и их индексами.
* Исходный массив не меняется.
*
* @function arrayElementIndex
* @param {Array} arr
* @param {Function} callback
* @return {Array} results
*/
const arrayElementIndex = function(arr, callback){
  results = [];
  for (let index in arr) {
       callback(arr[index], index)
  }
   return results 
}

/**
* Функция arrayEinElement выполняет указанную функцию один раз для каждого элемента в массиве.
* Если хоть 1 значение соответствует искомому, то цикл заканчивается.
* На выходе получаем новый массив c элементом.
* Исходный массив не меняется.
*
* @function arrayEinElement
* @param {Array} arr
* @param {Function} callback
* @param {argument} arg 
* @return {Array} results
*/
const arrayEinElement = function (arr, callback, arg) {
  results = [];
  for (let i in arr) {
    if (results.length != 0) break
    if (callback.call(arg, arr[i], i, arr)) {
        results.push(arr[i]);
    }     
  }
  return results
}

/**
* Функция arrayElementFromTheEnd выполняет указанную функцию один раз для каждого элемента в массиве.
* Начиная с последнего элемента перезаписываем его в первый в новом массиве.
* Т.е. переворачиваем массив.
* На выходе получаем новый массив c элементом.
* Исходный массив не меняется.
*
* @function arrayElementFromTheEnd
* @param {Array} arr
* @param {Function} callback
* @return {Array} results
*/
const arrayElementFromTheEnd = function(arr){
  let results = []
  for( let i = arr.length; i--; ){
	       results.push( arr[i] )
  }
  return results;
	}

/**
 * Функция arrayElementFromTheEnd выполняет сортировку в передаваемом массиве
 * и перезаписывает его
 * @function arraySorting
 * @param {Array} arr
 * @param {Function} callback
 * @return {Array} arr
 */
  const arraySorting = function Sort(arr){
    for (let i = 0; i < arr.length-1; i++) { 
        for (let j = 0; j < arr.length-1-i; j++) { 
             if (arr[j+1] < arr[j]) { 
                 let el = arr[j+1]
                 arr[j+1] = arr[j]
                 arr[j] = el; 
             }
        }
     } 
     
     return arr;
  }                    