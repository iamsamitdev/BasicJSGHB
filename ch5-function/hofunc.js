// สร้างฟังก์ชันหลัก
function applyOperation(a, b, operation) {
  return operation(a, b)
}

// สร้างฟังก์ชันที่จะใช้เป็นพารามิเตอร์
function add(a, b) {
  return a + b
}

function multiply(a, b) {
  return a * b
}

// เรียกใช้งานฟังก์ชันหลัก
console.log(applyOperation(5, 10, add)) // 15
console.log(applyOperation(5, 10, multiply)) // 50