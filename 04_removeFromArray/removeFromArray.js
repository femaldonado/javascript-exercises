// array - [1, 2, 3, 4]
// valuesToRemove - [3, 2]
const removeFromArray = function (array, ...valuesToRemove) {
  const newArray = []; //[1, 4]

  array.forEach((item) => { // 2
    const isValueRemovable = valuesToRemove.includes(item) // true

    if (!isValueRemovable) { // false
      newArray.push(item);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
