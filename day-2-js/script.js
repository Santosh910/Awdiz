//conditional statement

//type:
//if else,
//switch

//if else
// syntax-

// if(){

//}else{

//}

var age = 88;
console.log(age > 18)

if (age > 18) {
    console.log("you are older than 18")
} else {
    console.log("you are smaller than 18")
}


// =
// ==
// ===

//=
//value assign

//==
//compare only data

//===
// compare data + datatype

console.log(200 == "200")
console.log(200 === "200")


//&& -- all condition must be true
// || -- one condition is true then will writen true

console.log(13 > 6 && 15 > 10 && 5556 > 987)

console.log(9 > 14 || 998 > 897 || 76 > 987)


var age = 19;
var had = false;

// console.log(had)

if (age >= 19 && age <= 80 && had == false) {
    console.log(`you are allowed for DL age -${age}`)
} else if (age == 18 && !had) {
    console.log(`you are allow for ll-${age}`)
} else {
    console.log(`you are not allow for dl.${age}`)
}


// break - for loops
//return

var name = "santosh";

switch (name) {
    case "santosh":
        console.log(name)
        break;
    case "awdiz":
        console.log(name)
        break;
    case "abc":
        console.log(name)
        break;
    case "xyz":
        console.log(name)
        break;
    default:
        console.log("not matched")            

}



// loop
// for
// while

// for

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)


var num = 8765;// assign
num = num +1;// re-assign
num = num +1;
num = num +1;
num = num +1;
num++;
num++;
num++;
num++;
num = num -1;
num--;
num--;
num--;
num--;
num--;
num--;
num--;
console.log(num)


for (var i = 1;i <= 10;i = i+1){
    console.log(i)
    //i=i+1
}

// 1st iteration : i = 1, 1 <= 10 -true,log(1),i =1+1,i=2
// 2nd iteration : i = 2, 2 <= 10 -true,log(2),i =2+1,i=3
// 3rd iteration : i = 3, 3 <= 10 -true,log(1),i =3+1,i=4


// 9th Iteration : i = 9, 9 <= 10 - true, log(9),  i = 9 + 1, i = 10
// 10th Iteration :i = 10, 10 <= 10 - true, log(10), i = 10 + 1, i = 11;
// 11th iteration :i = 11, 11 <= 10 - false 