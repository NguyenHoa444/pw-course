# Tổng hợp kiến thức lesson 02
## 1. Git
### a. Các vùng
Có 3 vùng:
- Working directory 
> Sau khi khởi tạo git init
- Staging area
> Sau khi chạy lệnh git add .
- Repository
> Sau khi chạy lệnh git commit -m" message"
### b. Các câu lệnh git
Git init
> Khởi tạo repo local, làm 1 lần duy nhất
Git remote add origin <url>
> Liên kết git local với github
Git add .
> Add file vào staging area
Git commit -m"message"
> Commit file
git push origin main
> Push code lên github 
### c. Cấu hình git
git config user.name "Hoa Nguyen"
git config user.email "Nguyenthihoa4497@gmail.com"
> Set username, password riêng cho mỗi repo.
### d. Kiểm tra status của files
git status
### e. Kiểm tra lịch sử git
git log
## 2. Java script
### a. In ra text
console.log ("text");
### b. Biến
- var Username = "Hoa";
- let isloveplaywright = true;
> Biến là giá trị có thay đổi
### c. Hằng
- const age = 29;
- const Template = `My age is ${age}`;
> Hằng là giá trị không thay đổi
### d. Comment
// this is a comment.
### e. So sánh
const a = 1;
const b = 2;
console.log (a < b);
console.log (a > b);
console.log (a == b); // Chỉ so sánh giá trị
console.log (a === b); // So sánh cả giả trị và kiểu dữ liệu
### f. Kiểm tra kiểu dữ liệu của biến
console.log (typeof <value>);
### g. Toán tử 1 ngôi prefix
let a = 10;
b = ++a; // Tăng a lên 11 rồi trả về b = 11
console.log (a);
console.log (b);
### h. Toán tử 1 ngôi postfix
let a = 10;
b = a++; // Trả về a 11 rồi mới tăng
console.log (a);
console.log (b);
### i. Điều kiện
if (hour <= 10 $$ hour >= 6){
    console.log ("Good morning")
};
if (hour > 11){
    console.log ("Good day")
};
### k. Vòng lặp
for (let i = 0, i < 1000, i++){
    console.log ("hello")
};