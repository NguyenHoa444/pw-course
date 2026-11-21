# Tổng hợp kiến thức Lesson 02
## 1. Git
1. Vesion control system
- Là hệ thống quản lý phiên bản
- Có 3 loại:
  - Local: Lưu ở máy cá nhân
  - Centralize: Lưu ở 1 máy chủ
  - Distributed: Lưu ở nhiều máy khác nhau
2. Các vùng  
a. Working directory
- Gồm các file mới hoặc file được sửa
b. Staging area
- Gồm các file chuẩn bị commit
c. Commit
- Gồm các file đã được commit
3. Các câu lệnh trong git  

|STT|Mục đích    |Câu lệnh|  
|---|------------|--------|  
|1|Cấu hình git mặc định|git config--global user.name "Nguyen Hoa"|  
|| |git config--global user.email "Nguyenthihoa4497@gmail.com"|
|| |git config--global init.defaultBranch main|
|2|Khởi tạo dự án playwright|npm init playwright@latest|
|3|Khởi tạo repo local|git init|
|4|Tạo repo github và liên kết đến local|git remote add origin <url>|
|5|Thêm file vào staging|git add .|
|6|Commit file|git commit -m"commit 1"|
|7|Push code|git push origin main|
|8|Kiểm tra danh sách commit|git log|

## Java script
1. In ra dòng chữ  
console.log("Hello");
2. Khai báo biến
- var:
   - Cú pháp cũ
   - Không an toàn
   - Có thể khai báo lại
   - Phạm vi global 
- let:
   - Cú pháp mới
   - An toàn hơn
   - Không được khai báo lại
   - Phạm vi chỉ trong block code
3. Khai báo hằng  
const Name = "Hoa";
4. So sánh
- Lớn hơn: >
- Nhỏ hơn: <
- Bằng và cùng kiểu dữ liệu: ===
- Bằng và không cần cùng kiểu dữ liệu: ==
- Khác: !==
5. Điều kiện kết hợp
- AND: &&
- OR: ||
6. Toán tử 1 ngôi
- Chỉ cần 1 toán hạng để thực hiện
- Prefix:  
let a = 1;  
b = ++a;  
=> Tăng a lên 2 rồi trả về b = 2
- Postfix:  
let a = 1;  
b = a++;  
=> Trả về b = 1 rồi mới tăng
7. Vòng lặp  
for (<Điều kiện khởi tạo>; <Điều kiện lặp>; <Cập nhật>){  
    //code  
};  
VD: for (i = 0; i < 10; i++){  
    console.log("Xin chao")  
};  
