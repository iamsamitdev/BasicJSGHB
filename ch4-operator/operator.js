// ตัวดำเนินการทางคณิตศาสตร์
// 1. บวก (+)
// 2. ลบ (-)
// 3. คูณ (*)
// 4. หาร (/)
// 5. หารเอาเศษ (%)

a = 10
b = 20
c = a + b
d = a - b
e = a * b
f = a / b
g = a % b

console.log(c) // 30
console.log(d) // -10
console.log(e) // 200
console.log(f) // 0.5
console.log(g) // 10

// ตัวดำเนินการ การเปรียบเทียบ
// 1. เท่ากับ (==)
// 2. ไม่เท่ากับ (!=)
// 3. มากกว่า (>)
// 4. น้อยกว่า (<)
// 5. มากกว่าหรือเท่ากับ (>=)

x = 10
y = 20

console.log("--------------------")
console.log(x == y) // false
console.log(x != y) // true
console.log(x > y) // false
console.log(x < y) // true
console.log(x >= y) // false

// ตัวดำเนินการตรรกะ
// 1. และ (&&)
// 2. หรือ (||)
// 3. ไม่ (!)

const l = 6
const m = 3

console.log("--------------------")
console.log(l < 10 && m > 1) // true
console.log(l == 5 || l == 5) // false
console.log(!(l == m)) // true

// ตัวดำเนินการกำหนดค่า (Assignment Operator)
let n = 10

console.log("--------------------")
console.log(n+=5) // 15
console.log(n-=5) // 10
console.log(n*=5) // 50
console.log(n/=5) // 10
console.log(n%=5) // 0

// ตัวดำเนินการแบบ conditional (Ternary Operator)
let age = 16
let votable = (age <= 18) ? "You are too young" : "You are old enough"

console.log("--------------------")
console.log(votable) // You are too young

console.log("--------------------")

// การรับค่าจาก console
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What is your name? ', name => {
    console.log(`Hi ${name}!`)
    readline.close()
})