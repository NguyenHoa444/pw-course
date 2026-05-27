# I. Git
## 1. Undo actions
### a. Di chuyển file từ vùng Staging về Working directory  
- Di chuyển 1 file cụ thể:
git restore --staged <tên file>
- Di chuyển toàn bộ file ở Staging:
git store --staged .
### b. Di chuyển file từ vùng Repository về Working directory
- Lùi lại 1 commit:
git reset HEAD~1
- Lùi lại 2 commit:
git reset HEAD~2
## 2. Branch
### a. Tạo ra 1 nhánh
git branch <Tên nhánh> // Nhánh mới sẽ copy nhánh hiện tại
### b. Kiểm tra nhánh
git branch // Cần có ít nhất 1 nhánh mới hiện danh sách nhánh
### c. Switch nhánh
git checkout <tên nhánh>
### d. Vừa tạo mới vừa switch nhánh
git checkout -b <tên nhánh>
### e. Xoá nhánh
git branch -D <tên nhánh>
## 3. File gitignore
### a. Bỏ qua những file không cần thiết phải commit
filename
foldername/
### b. Comment trong file gitignore
Sử dụng dấu #: # comment
# II. Java script
## 1. Convention
- snake_case (Tạm thời không dùng)  
VD: nguyen_hoa  
- camelCase (Đặt tên biến, hàm)  
VD: nguyenHoa  
- kebab-case (Đặt tên file/folder)  
VD: nguyen-hoa  
- PascalCase (đặt tên class)  
VD: NguyenHoa  
## 2. Console log
Sử dụng nháy đơn, nháy kép, dùng kèm với variable  
Let ten = "Hoa";  
let queQuan = "Thai Binh";  
console.log (`Ten toi la ${ten}, Toi den tu ${queQuan}`); 
### 3. Object 
- Cú pháp: key: <value>  
VD:  
const Info = {
    Name: "Hoa;  
    queQuan: "Thai Binh";  
    "que quan 2": "Ha Noi";  
};  
console.log (Info);  
- Truy xuất giá trị object:  
const Info = {
    Name: "Hoa;  
    queQuan: "Thai Binh";  
    "que quan 2": "Ha Noi";  
};  
console.log (Info.name); 
### 4. Array (mảng)
- Lấy 1 số trong mảng  
const arr = [1,2,3,4,5];  
console.log (arr[0]);  
=> In ra 1
- Lấy độ dài của mảng  
const arr = [1,2,3,4,5,6];  
console.log(arr.length);  
=> In ra 6 
### 5. Array kết hợp vòng lặp
arr = [66,77,88,99];  
for(let i = 0; i < arr.length; i++){  
    console.log (arr[i])  
};  
=> Kết quả: 66,77,88,99
### 6. Function (Hàm)
function tinhDienTich(dai,rong){  
    const dienTich = dai*rong;  
    console.log (`Dien tich hinh chu nhat la ${dai} x ${rong} = ${dienTich}`)  
};  
tinhDienTich (40,20);  
=> Kết quả: Dien tich hinh chu nhat la 40 x 20 = 800  


