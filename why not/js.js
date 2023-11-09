function largest(arr) { 
    let i;  
    let max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 
function smallest(arr) { 
    let i;  
    let min = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < min) 
            min = arr[i]; 
    } 
    return min; 
} 
// Zadanie 1
let tab1 = [7,3,1,6,9,5,4,10,2,2]
//1.1
console.log(tab1[4])
tab1[6]=12
//1.2
let tab2 = tab1
//1.3
let tab3= tab1.map(function (num, idx) {
    return num + tab2[idx];
  });
//1.4
tab2 = tab1.reverse()
//Zadanie 2
let tab4=[parseInt(prompt("Podaj liczbe do tablicy")),parseInt(prompt("Podaj liczbe do tablicy")),parseInt(prompt("Podaj liczbe do tablicy"))]
console.log(tab4[1])
console.log(largest(tab4))
console.log(smallest(tab4))
let average = tab4.reduce((a, b) => a + b, 0) / tab4.length;
console.log(average)
