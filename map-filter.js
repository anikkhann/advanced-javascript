const numbers=[2, 3, 4, 5, 6, 7, 8];
// const output=[];
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const square = element*element;
//     output.push(square);
//     //console.log(element);
    
// }
// console.log(output);

//uporer kajtai map use kore easily kora jai

function square(element) {
    return element*element;
}
// numbers.map(function (element, index, array) {//map ar vetor 3ta parameter boste pare.1-element,2-index,3-array.
//     console.log(element, index, array);
// })

// const result=numbers.map(function (element) {
//     return element*element;
// })
// console.log(result);
//map
// const result=numbers.map(x => x*x);
// console.log(result);

//filter
const result=numbers.filter(x => x>5);
console.log(result);
//find
const result2=numbers.find(x => x>5);
console.log(result2);

