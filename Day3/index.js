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

const app = require("express")();

const port = 8000;
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
