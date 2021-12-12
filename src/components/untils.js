//key = string always 

const groupBy = (arr, key) => {
    if (!arr || !key) {
      throw new Error('One or more arguments are not defined');
    } else {
      return arr.reduce((acc, item) => {
        return !!acc[item[key]]
          ? { ...acc, [item[key]]: [...acc[item[key]], item] }
          : { ...acc, [item[key]]: [item] };
      }, {});
    }
  };

//   function groupBy(objectArray, property) {
//     return objectArray.reduce(function (acc, obj) {
//       let key = obj[property]
//       if (!acc[key]) {
//         acc[key] = []
//       }
//       acc[key].push(obj)
//       return acc
//     }, {})
//   }