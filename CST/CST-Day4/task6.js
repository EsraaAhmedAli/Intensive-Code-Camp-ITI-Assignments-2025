
function sortNumbers(arr, order = 'asc') {
    if (order === 'asc') {
      // ترتيب تصاعدي
      return arr.sort((a, b) => a - b);
    } else if (order === 'desc') {
      // ترتيب تنازلي
      // return arr.sort((a, b) => b - a);
      return arr
    } else {
      console.log("اختار 'asc' أو 'desc' بس!");
      return arr;
    }
  }
  
  // جربيها كده 👇
  const numbers = [40, 100, 1, 5, 25, 10];
  console.log('Ascending:', sortNumbers(numbers, 'asc'));   // [1, 5, 10, 25, 40, 100]
  console.log('Descending:', sortNumbers(numbers.reverse(), 'desc')); // [100, 40, 25, 10, 5, 1]
