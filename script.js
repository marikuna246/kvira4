// 1)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// let numbers = [3,5,7,8,9,11,20]
// function sum(arr){
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         count+=arr[i];
// }
//     return count;
// }
//   console.log(sum(numbers));

// 2)დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// let numbers = [3,5,7,8,9,19,5]
// function sum(arr){
//     let count =0;
//     for(let i=0; i<arr.length; i++){
//         count+=arr[i];
// }
//     return count/arr.length;
// }
//   console.log(sum(numbers));

  
// 3)დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.
// let arr = [3,4,8,9,11,15,16]


// function sortArray(arr){
//     return arr.sort((a,b)=>a-b)
// }
// console.log(sortArray(arr))

// 4)დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.
// let arr = [3,4,8,9,11,15,16]


// function sortArray(arr){
//     let sorted= arr.sort((a,b)=>{
//         return a-b
//     });
//     return sorted[6]
// }
// console.log(sortArray(arr))

// 5)დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// let arr = [3,4,8,9,11,15,16]


// function sortArray(arr){
//     let sorted= arr.sort((a,b)=>{
//         return a-b
//     });
//     return sorted[0]
// }
// console.log(sortArray(arr))


// 6)დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.
// function includes(arr,element){
//     for(let number of arr){
//         return true;
//     }

//     return false;
// }
// console.log(includes([1,4,6],4))

// // 7)დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

// let num=[3,5,7,8,9,1]
// console.log(num.slice(2));



// 8)დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.

// Write a program to count the number of occurrences of a specific element in an array. 


// function element2(arr, element) {

//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//         count++;
//       }
//     }
//     return count;
//   }
  

  
  
//   console.log(element2([2,3,4,2,6,2],2));

// 9)დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let number= [1,2,5,7,9,4,12,15]
// function findSumOfEvenNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         sum += arr[i]; 
//       }
//     }
//     return sum;
//   }
//   console.log(findSumOfEvenNumbers(number));
// 10)დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.
// let array =[1,2,4,5,4,3,6,11,23,98]
// function findSecond(arr){
//     let sorted=arr.sort((a,b)=>b-a);
//     return sorted[1];

// }
// console.log(findSecond(array));


// 11)დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// let array1= [1,2,3,];
// let array2=[1,2,3,];
// function arrays(arr1,arr2){
//     if(arr1.length==arr2.length){
//         for(let i=0; i>arr2.length; i++){
//             if(!arr1.includes(arr2[i])){
//                 return "ar aris 2 masivi ertmanetis toli"
//             }
//         }
//         return "2 masivi ertmanetis toli"
//   }else{
//     return "arlet  aris 2 masivis ertmanetis toli"
//   } 
// }


// console.log(arrays(array1,array2))

// 12)დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// let array1 = ['c', 'b', 'a'];
// let array2 = ['f', 'd', 'e'];
// let array3 = array1.concat(array2);


// array3.sort()
// console.log(array3);



// 13)დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.

// let array =["a","c","f", "b","d"];
// array.sort()
// console.log(array);

// 14)დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [1, 3, 5, 6, 7];
// let array3 = [5, 1, 3, 8, 9];

// function findelements(arr1,arr2,arr3) {
//     let elements =[];
//     for (i=0; i<arr1.length; i++){
//     if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])) {
//         elements.push(arr1[i])
//     }
        
//     }
//     return elements
// }
// console.log(findelements(array1, array2, array3))

// 15)შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე
// let car= {
//     marke:"bwm",
//     model:"i4",
//     yahr:2014,

// }

// console.log(car)
// 16)დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// let car= {
//     marke:"bwm",
//     model:"i4",
//     yahr:2014,
//     start: function(){
//         console.log("The car is starting!")
//     }

// }
// car.start()
// 17)შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// let person={
//     name: "mari",
//     yahr: 31,
//     city: "Tbilisi"

// }
// console.log(person.name, person.yahr, person.city)
// 18)დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
// let person={
//     name: "mari",
//     yahr: 31,
//     city: "Tbilisi",
    

// }
// person.job="Programmer"
// console.log(person);
