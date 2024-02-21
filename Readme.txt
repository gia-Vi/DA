* 4 phần mềm cho project:
- PgAdmin4                                                         //để chạy database
- Microsoft Visual Studio 2022                                     //để chạy backend 
- Android Studio (hoặc phần mềm tương đương)                       //để chạy máy ảo (Android)
- Visual Studio Code (hoặc code editor tương đương)                //để chạy code \
=============================================================================================================================================================

1. PgAdmin4

- B1: Tại đường dẫn: "...\DACNTT\Backend\Backend\Extra\full_script.sql", ta copy toàn bộ dòng code trong file "full_script.sql"
- B2: Mở PgAdmin4, tạo Database tên "CNTT", nhấp phải chuột và chọn "Query tool", và dán toàn bộ dòng code vừa copy từ file "full_script.sql", và chạy đoạn code

-------------------------------------------------------------------------------------------------------------------------------------------------------------

2. Microsoft Visual Studio 2022: 

** Địa chỉ IP: có thể lấy qua cú pháp: "ipconfig" trên cmd

- B!: Khởi động ứng dụng, chọn và mở file Solution "Backend.sln" 
- B2: Theo đường dẫn: "https://json.schemastore.org/appsettings.json", tại file "appsettings.json", ta sửa mục "Context" (dòng 10) theo các thuộc tính của máy mình sử dụng (địa chỉ IP: có thể lấy qua cú pháp: "ipconfig" trên cmd)
- B3: Theo đường dẫn: "https://json.schemastore.org/launchsettings.json", tại file "launchsettings.json", ta chỉ sửa địa chỉ ip đầu tiên (không sửa Port) của mục "applicationUrl" (không sửa địa chỉ ip thử 2)
- B4: Theo đường dẫn: "...\DACNTT\Frontend\screens\Login.js", tại file "Login.js", ta sửa địa chỉ ip trong các hàm fetch (dòng 33 và dòng 44)
- B5: Chạy file "Backend.sln" (hoặc sử dụng nút F5, để Run)

--------------------------------------------------------------------------------------------------------------------------------------------------------------

3. Android: Chọn chạy ứng dụng máy ảo
4. Visual Studio Code: Tại cmd của "...\DACNTT\Frontend", ta chạy dòng lệnh "npm i" để cài đặt file, và dùng lệnh "npm start" để chạy đồ án