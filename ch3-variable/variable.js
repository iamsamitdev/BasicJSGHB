// การสร้างตัวแปรใน JavaScript 
// มี 3 วิธี คือ var, let และ const
// 1. var
// var  global scope หรือ function scope
// var fname = 'John'
let fname = 'John'

{
  let fname = 'Jany'
}

console.log(fname) // John

// var lname = 'Doe'
let lname = 'Doe'

function showName() {
  let lname = 'Smith'
}

showName()
console.log(lname) // Smith

// 2. let
// let  block scope
// let fname = 'John'
// let fname = 'John'

// {
//   let fname = 'Jany'
// }

// 3. const
const age = 20
// age = 25 // error
const person = {}
person.name = 'John'
console.log(person.name) // John
person.name = 'Jany'
console.log(person.name) // Jany

// const กับ array
const fruits = []
fruits.push('orange')
fruits.push('apple')
console.log(fruits)