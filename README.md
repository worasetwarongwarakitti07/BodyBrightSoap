# BodyBright E-Commerce + Google Sheets SKUs + Warehouse Pick & Pack

โปรเจกต์เว็บไซต์ขายสบู่ **BodyBright** รองรับการอัปโหลดขึ้น GitHub และ Deploy บน Vercel พร้อมระบบเชื่อมฐานข้อมูล **Google Sheets** และโฟลเดอร์แยกสำหรับ **คลังสินค้า/แพ็คของ/พิมพ์ใบจ่าหน้าพัสดุ**

## โครงสร้างโฟลเดอร์ใน GitHub
```text
├── index.html                  # หน้าแรก (Landing Page)
├── product.html                # หน้าแสดงสินค้าทั้งหมด 10 SKUs
├── order.html                  # หน้าตะกร้าสินค้าและกรอกข้อมูลจัดส่ง
├── thankyou.html               # หน้าขอบคุณและใบสรุปคำสั่งซื้อ
├── admin.html                  # หน้าหลังบ้าน (ตั้งค่า Google Sheet URL และดูออเดอร์)
├── warehouse/
│   └── pick-pack.html          # โฟลเดอร์แยก: ระบบหยิบสินค้า แพ็ค และพิมพ์ใบจ่าหน้าพัสดุ
├── google-apps-script/
│   └── Code.gs                 # โฟลเดอร์แยก: โค้ด Backend เชื่อมต่อ Google Sheets
├── data/
│   └── products.json           # ฐานข้อมูล SKUs และสูตรแตกเซตสินค้าสำหรับแพ็ค
├── css/
│   └── style.css               # สไตล์ชีต + Print CSS สำหรับพิมพ์ใบจ่าหน้าพัสดุ
├── js/
│   └── app.js                  # ลอจิกตะกร้าสินค้า, ซิงก์ Google Sheet และคำนวณใบหยิบแพ็ค
└── assets/                     # ใส่รูปภาพ sport.jpg และ peach.jpg
```

## วิธีเชื่อมต่อ Google Sheets (5 นาทีเสร็จ)
1. เปิด Google Sheet ของคุณ (ที่มีแท็บ `Orders` และ `SKUs`)
2. ไปที่เมนู **ส่วนขยาย (Extensions) > Apps Script**
3. นำโค้ดทั้งหมดในไฟล์ `google-apps-script/Code.gs` ไปวางทับโค้ดเดิมแล้วกดบันทึก
4. กด **การทำให้ใช้งานได้ (Deploy) > รายการใหม่ (New deployment)** > เลือกประเภทเป็น **เว็บแอป (Web app)**
   - ดำเนินการในฐานะ: **ฉัน (Me)**
   - ผู้ที่มีสิทธิ์เข้าถึง: **ทุกคน (Anyone)**
5. คัดลอก **Web App URL** ที่ได้ ไปวางในหน้า `admin.html` ของเว็บไซต์แล้วกดบันทึก
