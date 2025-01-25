//Rest Api = api ที่ออกเเบบตามหลักของ rest 6 ข้อ คือ 1. Stateless 2. http เป็นตัวกลาง 3. json
//Http Method = CRUD คือ 1. Create 2. Read 3. Update 4. Delete ซึ่งใน http จะมี method ที่ใช้ในการทำ CRUD คือ 1. POST 2. GET 3. PUT 4. DELETE ตามลำดับ

// 1. Private Api
// 2. Partner Api
// 3. Public Api

//Request
// Http method
// Url
// Header ข้อมูลเพิ่มเติม เช่น json
// Body ข้อมูลที่ส่งไป

//Response
// Status code 200, 201, 400, 404, 500 อยู่ที่การดักerror
// Header ข้อมูลเพิ่มเติม เช่น json
// Body ข้อมูลที่ส่งกลับมา

//Json = Javascript Object Notation คือ รูปแบบของข้อมูลที่ใช้ในการสื่อสารระหว่าง client กับ server โดยมีรูปแบบเป็น key value โดย key จะเป็น string และ value จะเป็นข้อมูลที่ต้องการส่งไป

//Step 1. npm init -y จะได้ไฟล์ package.json มันจะเก็บconfigของโปรเจคเรา
//Step 2. npm install express body-parser mysql2 dotenv nodemon ติดตั้ง express เพื่อใช้ในการสร้าง server และ body-parser เพื่อใช้ในการ เปลี่ยนbodyให้เป็นjson mysql2 เพื่อใช้ในการเชื่อมต่อกับฐานข้อมูล  dotenv เพื่อใช้ในการเก็บค่า config ของโปรเจคเรา nodemon เพื่อใช้ในการรันโปรเจคเรา

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const port = 8000
require('dotenv').config()
app.use(bodyParser.json())
app.get('/myname', (request, response) => {
    response.json({
        name: "Phakaphol",
        age: 21
    })
})


mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
}).then(connection => {
    app.get('/members', async (req, res) => {
        try {
            const [rows] = await connection.query('SELECT * FROM members');
            res.json(rows)
            console.log(rows);  
        } catch (error) {
            console.log(error);
        }

    })
})

app.listen(port, () => {
    console.log(`Server run on port 6789`);
})

 