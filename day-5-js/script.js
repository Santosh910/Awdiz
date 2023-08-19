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
        // console.log( additionofoddnumber, "updated value")
        additionofoddnumber = additionofoddnumber + array[i];
    }else{
        additionofevennumber = additionofevennumber + array[i];
    }
}
console.log( additionofoddnumber, "-addition of odd number");
console.log( additionofevennumber, "-addition of even number");