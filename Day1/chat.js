const prompt = require("prompt-sync")();

class bl {
    constructor() {
        this.username = null; // เก็บ username
        this.password = null; // เก็บ password
    }

    addusername(inpusername) {
        this.username = inpusername;
        console.log(`Username ถูกบันทึกสำเร็จ: ${this.username}`);
    }

    addpassword(inppassword) {
        this.password = inppassword;
        console.log(`Password ถูกบันทึกสำเร็จ: ${this.password}`);
    }

    userchecker(loginusername) {
        return loginusername === this.username; // ตรวจสอบ username
    }

    passchecker(loginpassword) {
        return loginpassword === this.password; // ตรวจสอบ password
    }
}

class ui {
    constructor(user) {
        this.user = user; // รับ instance ของ bl
    }

    welcome() {
        console.log("สวัสดี! คุณต้องการเข้าสู่ระบบหรือสมัครใช้งาน?");
        console.log("[1] สมัครใช้งาน");
        console.log("[2] เข้าสู่ระบบ");
        let choice = prompt("เลือก: ");
        switch (choice) {
            case "1":
                this.signin();
                break;
            case "2":
                this.login();
                break;
            default:
                console.log("คำสั่งไม่ถูกต้อง ลองใหม่อีกครั้ง");
                this.welcome();
        }
    }

    signin() {
        let inpusername = prompt("กรอกชื่อผู้ใช้: ");
        let inppassword = prompt("กรอกรหัสผ่าน: ");
        this.user.addusername(inpusername); // ใช้ instance ของ bl
        this.user.addpassword(inppassword); // ใช้ instance ของ bl
        console.log("สมัครสำเร็จ! กรุณาเข้าสู่ระบบ.");
        this.welcome();
    }

    login() {
        let loginusername = prompt("กรอกชื่อผู้ใช้: ");
        let loginpassword = prompt("กรอกรหัสผ่าน: ");
        let usernamechecker = this.user.userchecker(loginusername);
        let passwordchecker = this.user.passchecker(loginpassword);

        if (usernamechecker && passwordchecker) {
            console.log("เข้าสู่ระบบสำเร็จ!");
        } else {
            console.log("เข้าสู่ระบบล้มเหลว ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง.");
        }
    }
}

const userInstance = new bl(); // สร้าง instance ของ bl
const app = new ui(userInstance); // ส่ง instance ของ bl ให้กับ ui
app.welcome();