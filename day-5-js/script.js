//find out all odd numbers from given array?
var array = [2, 45, 12, 12, 52, 45, 23, 65, 87];

for(var i = 0;i < array.length;i++) {
    //console.log(array[i])
    if (array[i] % 2 != 0){
       console.log(array[i], "this is odd number.")
    }else{
        console.log(array[i], "this is even number")
    }
}


//q find out all odd numbers and even numbers addition from given array.
var array = [2, 45, 12, 12, 52, 45, 23, 65, 87];
var additionofoddnumber = 0;
var additionofevennumber = 0;

for(var i = 0; i < array.length; i++) {

    if (array[i] % 2 != 0){
        console.log( additionofoddnumber, "updated value")
        additionofoddnumber = additionofoddnumber + array[i];
    }else{
        additionofevennumber = additionofevennumber + array[i];
    }
}
console.log( additionofoddnumber, "-addition of odd number");
console.log( additionofevennumber, "-addition of even number");




//Nested FOR loop

//q given an array find out addition of two number which is equal to target

var array = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3];
var target = 10;

for (var i = 0; i < array.length; i++){
    // console.log(array[i])
    for (var j = i+1;j < array.length; j++){
        if (array[i] + array[j] == target){
            console.log(array[i], " + ",array[j], "=" ,array[i], " + ",array[j])
        }
    }
}


    // i++, i = 1



// i => 0 is fixed, j => 1 - 10
// i => 1 is fixed, j => 2 - 10
// i => 2 is fixed, j => 3 - 10
// i => 3 is fixed, j => 4 - 10
// i => 4 is fixed, j => 5 - 10
// i => 5 is fixed, j => 6 - 10
// i => 6 is fixed, j => 7 - 10
// i => 7 is fixed, j => 8 - 10
// i => 8 is fixed, j => 9 - 10
// i => 9 is fixed, j => 10



// console.log(array[0] + array[1] == target)
// console.log(array[0] + array[2] == target)
// console.log(array[0] + array[3] == target)
// console.log(array[0] + array[4] == target)
// console.log(array[0] + array[5] == target)
// console.log(array[0] + array[6] == target)
// console.log(array[0] + array[7] == target)
// console.log(array[0] + array[8] == target)
// console.log(array[0] + array[9] == target)
// console.log(array[0] + array[10] == target)


// console.log(array[1] + array[2] == target)
// console.log(array[1] + array[3] == target)
// console.log(array[1] + array[4] == target)
// console.log(array[1] + array[5] == target)
// console.log(array[1] + array[6] == target)
// console.log(array[1] + array[7] == target)
// console.log(array[1] + array[8] == target)
// console.log(array[1] + array[9] == target)
// console.log(array[1] + array[10] == target)


// console.log(array[2] + array[3] == target)
// console.log(array[2] + array[4] == target)
// console.log(array[2] + array[5] == target)
// console.log(array[2] + array[6] == target)
// console.log(array[2] + array[7] == target)
// console.log(array[2] + array[8] == target)
// console.log(array[2] + array[9] == target)
// console.log(array[2] + array[10] == target)
// 2 + 10 = 12
// 4 + 8 = 12
// 10 + 2 = 12
// 9 + 3 = 12
// 5 + 7 = 12