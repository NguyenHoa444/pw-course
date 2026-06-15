# Javascript
## 1. Function expression
- Là function được gán cho 1 biến  
VD:  
Khai báo hàm có tham số name, trả về chuỗi Hello < name >  
const Great = function (name){  
    console.log (`Hello ${name}`)  
}  
Great ("Hoa")  
=> Kq: Hello Hoa  
## 2. Lamda function
- Còn được gọi là arrow function, sử dụng mũi tên =>  
VD:  
Khai báo hàm có tham số name, trả về chuỗi Hello < name >  
const Great = name => {
    console.log(`Hello ${name}`)  
}
Great ("Hoa")  
=> Kq: Hello Hoa 
- Dạng rút gọn:  
   + Không có tham số  
   const Great = () => console.log("Hello!")  
   + Có 1 tham số  
   const double = x => x * 2;  
## 3. Anonymous function
- Chỉ cần dùng hàm 1 lần hoặc làm callback  
- Gán cho 1 biến:  
VD:  
const Great = function (){  
    console.log("Hello!")  
}  
- Dùng làm callback  
VD:  
const Great = function (){
    console.log("Hello!")
}
setTimour (Great, 3_000) // Sau 3s, setTimeout sẽ gọi lại hàm đó  
# DOM
## 1. Thẻ cấu trúc cơ bản
< html>	: Cấu trúc của trang, chứa toàn bộ nội dung trang web  
< head>	: Chứa metadata: Tiêu đề, hiển thị google (không hiển thị trực tiếp)  
< body>	: Nội dung của website  
< div>	: Block/container  
< span>	: Thẻ định dạng văn bản  
## 2. Thẻ nội dung
< h1> đến < h6>: Thẻ heading  
< p>:   Đoạn văn bản  
< a>:	Tạo liên kết đến các trang khác  
< img>:	Thẻ hình ảnh, thẻ tự đóng  
< ul>:	(Unoder list) Tạo danh sách không thứ tự, chỉ có dấu chấm đầu dòng  
< ol>:	(Order list) Tạo danh sách có thứ tự  
< li>:	Định nghĩa mục trong danh sách  
## 3. Thẻ tạo bảng
< table>:	Tạo bảng  
< thead>:	Chứa phần đầu bảng  
< tbody>:	Chứa nội dung chính  
< tfoot>:	Chứa phần chân bảng  
< tr>:	Tạo hàng  
< th>:	Tạo tiêu đề  
< td>:	Tạo ô dữ liệu  
## 4. Thẻ form
< form>:	Tạo form thu thập dữ liệu từ user  
< input>:	Nhập thông tin  
< button>:	Tạo nút bấm  
< select>:	Tạo dropdown  
< option> United States </ option>:	Định nghĩa các lựa chọn  
< textarea>:	Tạo vùng nhập văn bản nhiều dòng  
# Selector
## 1. Khái niệm
Là hành động tương tác với các phần tử trên website:
- Click  
- Input  
...
## 2. Phân loại selector
### a. Xpath
- Dùng được hầu hết các case
- Xpath tuyệt đối
    + Đi dọc theo DOM, bắt đầu bằng 1 dấu gạch chéo:
/html/body/div/h1
    + Nhược điểm:
      - Khi phần tử nằm sâu trong nhiều thẻ thì tìm sẽ rất khó và bất tiện, nếu thay đổi vị trí phần tử thì sẽ không tìm thấy với Xpath cũ
      - Khó tìm khi có 2 phần tử vị trí giống nhau
- Xpath tương đối
  + Tìm dựa vào đặc tính
  + Bắt đầu bằng 2 dấu gạch chéo //
  + //tenthe[@thuoctinh = 'gia tri']:  //form[@id = 'registrationForm']
### b. CSS selector
- Ngắn gọn, performance cao
- Chỉ dùng trong trường hợp dễ tìm
- Không linh hoạt bằng Xpath
### c. Playwright selector
- Chỉ dùng riêng cho playwright
- Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
- Hướng tới "giống người dùng đang nhìn thấy gì"
# Playwright basic syntax
## 1. Test
- Là đơn vị cơ bản để khai báo 1 test
- Câu lệnh:  
import {test} from '@playwright/test'  
test ('Basic actions', async ({page}) => {     
})
## 2. Step
- Đơn vị nhỏ hơn test, khai báo từng step của testcase  
- Câu lệnh:  
await test.step ("Step 1", async () => {
})
## 3. Navigate
- Điều hướng đến website
- Câu lệnh:  
await page.goto ('https://material.playwrightvn.com/')
## 4. Locator
- Tìm 1 phần tử trên website để tương tác với nó
- Câu lệnh:  
await page.locator ("//a[text() = 'Bài học 1']")
## 5. Click
- Single click:  
await page.locator ("//button").click();
- Double click:  
await page.locator ("//button").dblclick();
- Click chuột phải:  
await page.locator ("//button").click({  
     button: 'right'  
});
- Click chuột kèm bấm phím khác:  
await page.locator (" ").click({  
     modifiers: ['Shift'],  
});
## 6. Input
- Fill:  
Giống việc paste content vào ô input
- pressSequentially: 
Giống việc gõ từng chữ vào ô input
## 7. Radio/checkbox
- Kiểm tra xem giá trị hiện tại có đang là check hay không  
let isCheckedMale =  
        await page.locator ("//input[@id = 'male']").isChecked();  
        console.log (isCheckedMale)  
- Check/uncheck  
await page.locator ("// input").check ();  
await page.locator ("// input").setChecked (false);
## 8. Select
- Select option trong dropdown  
await page.locator("//select[@id = 'country']").selectOption("canada")  
## 9. Upload file
- Upload file vào form  
await page.locator("//input[@type = 'file']").setInputFiles("tests/lesson-04/test-upload-file.txt")