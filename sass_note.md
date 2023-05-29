---
marp: true
---
# Title: SASS
1. css processor
2. can use stuffs in js such as variables, functions, for, each, and so on... 

# Nesting - css
```Đây là cơ chế lồng các selector con vào bên trong selector cha --> Ưu điểm: giúp dễ quản lý css, giúp ta có thể coi được các cấu trúc css nhanh hơn, tránh việc gọi css miên mang và để ở nhiều nơi không tập trung lại giúp cho độ ưu tiên đạt tối đa để tránh bị đè css khi cần chỉnh sửa, chúng ta chỉ cần đi vào bên trong selector cha để tìm kiếm và chỉnh sửa
Selector parent (&): dùng dấu "&" để đại diện cho selector cha bên ngoài
Variables: dùng để chứa các giá trị liên quan về color, font-size, bg-color,... --> mục đích: tối ưu khi cần chỉnh sửa thì chỉ cần sửa ở một biến mà không cần đi tới nhiều nơi
Mixin and includes: 
 - mixins: cú pháp khai báo, dùng từ khoá @mixin tên (tham số truyền vào) {
  các thuộc tính css hay được sử dụng
 } --> lưu ý: khi có các tham số mặc định truyền vào mixin, ta phải để các tham số đó nằm ở sau cùng, tránh việc truyền vào bị thiếu tham số
```
 ----
 # Distribute files and import
 - Naming import files will start with "_name.scss". when doing that, the vscode scss extension will not interpret it, only main scss file --> @import? @use?