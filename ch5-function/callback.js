function fetchData(callback) {

  console.log('Fetching data...')

  // จำลองการเรียกใช้งาน API ด้วย setTimeout
  setTimeout(() => {
    console.log('Data fetched')
    callback('Data loaded successfully')
  }, 3000)
}

function displayData(data) {
  console.log(data)
}

// เรียกใช้งานฟังก์ชัน fetchData
fetchData(displayData) // Data loaded successfully

// ตัวอย่างการใช้ high order function กับ callback function
const numbers = [1, 2, 3, 4, 5]

// ใช้ map() เป็น high order function ในการวนลูปและคูณด้วย 2 กับทุกตัวใน numbers
const doubledNumbers = numbers.map(function(number) {
  return number * 2
})

console.log(doubledNumbers) // [2, 4, 6, 8, 10]