// var myName = "santosh";
// console.log(myName)

// var myName = "SANTOSH";
// console.log(myName, typeof(myName))

// string and string length

// var name =["santosh", "arun", "tarubai", "rutuja" ];

// function findLength(array){
//       var result = []
//       for(var i = 0;i < array.length;i++ ){
//         result.push(array[i].length)
//       }
//       return result;
// }
// console.log(findLength(name))

// find even number from array

// var number = [2,5,6,4,3,5,8,7,9,4,5,2];

// function findSumNumber(array){
//     var result = []
//     for(var i = 0;i < array.length;i++){
//         if(array[i] % 2 ==0){
//             result.push(array[i])
//         }

//     }
//     return result;
// }
// console.log(findSumNumber(number))

// find small numbeer

// var numbers = [2,5,6,4,8,6,4,2,1,5,7,9,65,0,84,8,4,84,8];

// function findSmallNumber(array){
//      var minimun = array[0] ;
//      for(var i = 1;i < array.length;i++){
//         if(minimun > array[i]){
//             minimun = array[i ]
//         }
//      }
//      return minimun;
// }

// console.log(findSmallNumber(numbers))

// Element present in both array

var array1 =[1,2,34,5,6]
var array2 =[2,5,6,1]

function findSame(array1, array2){
     var newArray = [];
     for(var i = 0;i < array1.length;i++){
        for(var j = 0;j < array2.length;j++){
            if(array1[i] == array2[j]){
                newArray.push(array1[i])
            }
        }
     }
     return newArray;
}

console.log(findSame(array1, array2))