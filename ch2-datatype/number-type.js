let num1 = 20
let num2 = 20.5
let num3 = 20.5e2
let num4 = 5.6789

// แสดงค่า
console.log(num1) // 20
console.log(num2) // 20.5
console.log(num3) // 2050

// เช็ค type
console.log(typeof num1) // number
console.log(typeof num2) // number
console.log(typeof num3) // number

// ตัดทศนิยมตำแหน่งปัดเศษตามหลักการทางคณิตศาสตร์ทั่วไป
console.log(num4.toFixed(2)) // 5.68

// ปัดเศษขึ้นและแสดงทศนิยม 2 ตำแหน่ง
console.log(Math.ceil(num4 * 100)/100) // 5.68

// ปัดเศษลงและแสดงทศนิยม 2 ตำแหน่ง
console.log(Math.floor(num4 * 100)/100)// 5.67

// ตัดทศนิยมโดยไม่ปัดเศษ
console.log(Math.trunc(num4)) // 5