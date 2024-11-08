// การสร้างฟังก์ชันใน JavaScript ES5
function sayHello(){
  console.log('Hello World')
}

function showInfo(){
  alert('This is a message')
}

// ฟังก์ชันที่มีการรับค่าพารามิเตอร์
function sayHi(name, age){
  console.log('Hello ' + name)
  console.log('You are ' + age + ' years old')
}

// เรียกใช้งานฟังก์ชัน
sayHello() // Hello World

sayHi('John', 30) // Hello John, You are 30 years old

// การสร้างฟังก์ชันใน JavaScript ES6
// สร้าง Arrow Function
const sayHelloWorld = () => console.log('Hello World with Arrow Function')

// เรียกใช้งานฟังก์ชัน
sayHelloWorld() // Hello World

// ฟังก์ชันที่มีการรับค่าพารามิเตอร์
const sum = (a=0, b=0) => { 
  let result = a + b
  return result 
}

console.log(sum(5)) // 5
console.log(sum(5,10)) // 15

// arrow function แบบมี parameter ตัวเดียว
const square = x => x * x

console.log(square(5)) // 25

// ให้แปลงฟังก์ชันนี้ เป็น arrow function
function isEven(number) {
  if (number % 2 === 0) {
    return true
  } else {
    return false
  }
}

const isEvenArrow = number => number % 2 === 0 ? true : false

console.log(isEvenArrow(6)) // false