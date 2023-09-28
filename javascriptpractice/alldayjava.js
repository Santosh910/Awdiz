// var age = 18;
// var had = true;
// console.log(age > 18)


// if(age > 18 &&  age <= 80 && !had){
//     console.log("you are allowed for dl")
// }else if(age == 18){
//     console.log("you are allowed for ll")
// }else{
//     console.log("you are not allowed for dl") 
// }
 


// for(var i = 1;i <= 10;i++){

    // if(i == 5){
    //     console.log(i,"-got 5") 
    //     break;
    // }
//    console.log(i) 
// }


// for(var i = 10;i => 10;i--){
//     console.log(i)
//     if(i == 5){
//         console.log(i,"-got 5") 
//         break;
//     }
   
// }

// Q. find total count from range 123 - 873, who are odd

// var start = 123;
// var end = 873;
// var oddcount = 0;
// var evencount = 0;

// for(var i = start;i <= end;i++){
//     if(i % 2 != 0){
//         console.log(i,"-odd numbers")
//         oddcount++;
//     }else{
//         console.log(i,"-even numbers")
//         evencount++;
//     }
// }
// console.log(oddcount,"-total odd numbers")
// console.log(evencount,"-total even numbers")


// Q.find out addition of first 10 natural numbers who are event

// var result = 0;

// for(var i = 1;i <= 10;i++){
//     if(i % 2 == 0){
//         console.log(i)
//         result = result +i;
//     }
// }
// console.log(result,"-addition of even number");

 //q.find out is "om" present in given array or not?

//  var myStudents = ["sagar", "pratik", "pranay", "Om"]

//  for(var i = 0;i < myStudents.length;i++){
//     if(myStudents[i] == "Om"){
//         console.log("we got om and value is =>",myStudents[i],"an index is",i)
//     }
//  }


// find out all odd numbers from given array.
// var array = [2,45, 65, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22 ]

// for (var i= 0;i< array.length;i++){
//     // console.log(array[i])
//     if(array[i] % 2 != 0){
//         console.log(array[i],"-odd nnumbers")
//     }else{
//         console.log(array[i],"-even number")
//     }
// }

// var array = [2,45, 65, 23, 65, 87, 123, 67, 87, 42, 4, 6, 78, 22 ]

function san(){
    console.log("inside function")
}
san()
