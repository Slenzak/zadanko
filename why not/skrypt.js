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
//2.2
console.log(largest(tab4))
console.log(smallest(tab4))
//2.3
let average = tab4.reduce((a, b) => a + b, 0) / tab4.length;
console.log(average)
//2.4
let i=0
tab4.forEach((element) => {
    if(element==3){
        i++
    }
});
console.log("Cyfra 3 wystąpiła "+i+" razy.")
//2.5
tab4.sort((a,b) => {return a-b})
console.log(tab4)
//2.6
console.log(tab4[1])
//2.7
console.log("Trzy najmniejsze liczby "+tab4[0]+" "+tab4[1]+" "+tab4[2])
console.log("Trzy najwieksze liczby "+tab4.at(-1)+" "+tab4.at(-2)+" "+tab4.at(-3))
//2.8
i=0
tab4.forEach(element => {
   tab4[i]=Math.pow(element,2)
   i++
});
console.log(tab4)
//2.9
let parzyste=0
let nieparzyste=0
tab4.forEach(element => {
    if(element%2==0){
        parzyste++
    }else{
        nieparzyste++
    }
})
console.log("Łacznie "+parzyste+" parzystych, i "+nieparzyste+" nieparzystych")
//2.10
let podzielne=0
tab4.forEach(element =>{
    if(element%3==0){
        podzielne++
    }
})
console.log("Łacznie "+podzielne+" podzielnych przez 3")
//zadanie 3 
//3.1
let tab5=[prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere"),prompt("podaj litere")]
//3.2
const word=prompt("Podaj 10 literowe słowo")
tab5 = word.split('')
console.log(tab5)
//3.3
i=0
tab5.forEach(element => {
    if(element != element.toUpperCase()){
        tab5[i]=element.toUpperCase()
    }else{
        tab5[i]=element.toLowerCase()
    }
    i++
})
console.log(tab5)
//3.4
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}
console.log(shuffleArray(tab5))
//zadanie 4
let tab6 =[]
for(i=0;i<=99;i++){
    tab6.push(Math.ceil(Math.random()*100))
}
console.log(tab6)
//4.1
console.log("Najwieksza liczba: "+largest(tab6))
let ilosc=0
for(i=0;i<=99;i++){
    if(tab6[i]==largest(tab6)){
        ilosc++
    }
}
console.log("Wystapila "+ilosc+" razy")
//4.2
for(i=0;i<=99;i++){
    if(tab6[i]%2 !=0){
        console.log(tab6[i])
    }
}
console.log("Stop")
//4.3
for(i=1;i<=99;i+=2){
    console.log(tab6[i])
}
//4.4
console.log("Wieksze od 5")
for(i=0;i<=99;i++){
    if(tab6[i]>5){
        console.log(tab6[i])
    }
}
console.log("Wieksze od 15")
for(i=0;i<=99;i++){
    if(tab6[i]>15){
        console.log(tab6[i])
    }
}
//4.5
let a=prompt("Podaj liczbe")
let najblizej=0
let temp=100
tab6.forEach(element =>{
    if(Math.abs(element-a)<=temp){
        najblizej=element
        temp=Math.abs(element-a)
    }
})
console.log("Najbliszy element to: "+najblizej)
//4.6
let idxmin = tab6.indexOf(Math.min(...tab6));
let previus = idxmin > 0 ? tab6[idxmin - 1] : null;
let next =
idxmin < tab6.length - 1 ? tab6[idxmin + 1] : null;
console.log("Poprzedni: "+previus)
console.log("Nasterpny: "+next)
//4.7
let tab7=[]
tab6.forEach(element =>{
    if(element>10){
        tab7.push(element)
    }
})
console.log(tab7)
//4.8
let tab8=[]
let suma = 0;
for (i = 0; i < 100; i++) {
    suma += tab6[i];
    tab8.push(suma);
}
console.log(tab8)
//4.9
tab8.sort((a,b)=> {return b-a})
console.log(tab8)
//4.10
let liczniki = {};
tab8.forEach(element => {
    if (liczniki[element]) {
        liczniki[element]++;
    } else {
        liczniki[element] = 1;
    }
});
console.log("Elementy występujące przynajmniej 3 razy:");
for (let element in liczniki) {
    if (liczniki[element] >= 3) {
        console.log(element);
    }
}
//Zadanie 5
let tab9=[]
function fibonacci(n) {
    let fibArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray;
}
//5.1
tab9=fibonacci(100)
console.log(tab9)
//5.2
tab9=[]
for(i=0;i<99;i++){
    tab9.push(Math.pow(2,i))
}
console.log(tab9)
//5.3
tab9=[]
for(i=1;i<100;i++){
    tab9.push(3*i)
}
console.log(tab9)
//5.4
tab9=[]
for(i=1;i<100;i++){
    tab9.push(Math.pow(2,i))
}
console.log(tab9)