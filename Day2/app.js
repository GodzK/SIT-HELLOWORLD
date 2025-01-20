const person1 = ["guest","play" ,"test"]
const person2 = ["trump","obama","biden"]

//concat คือการรวม
const persons = person1.concat(person2)
console.log(persons)

//filter เพื่อกรอง
const personfilter = persons.filter((data)=> data === "guest")
console.log(personfilter)

//include
const personcheck = persons.includes("plau")
console.log(personcheck)

//(splice(start: number, deleteCount?: number)

const notTest = persons.splice(2,1)
console.log(`not test ${notTest}`)
console.log(` person  ${persons}`)


//map for changing data
const personlovethai = persons.map((data)=> `${data} say docker is Easy`)
console.log(personlovethai)

//looping to find index     , [toLowerCase สำหรับการรับเพื่อHandle Error]
let index = persons.findIndex(data => data == "Biden".toLowerCase())
console.log(`ตำเเหน่งอยู่ที่ ${index}`)