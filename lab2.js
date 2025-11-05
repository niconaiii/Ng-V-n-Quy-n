// // Sửa đoạn code sau để hoạt động đúng
// for (let i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // Hiện tại in ra 3,3,3
//   }, 100);
// }
// // Yêu cầu: Sửa để in ra 0,1,2



// // Tạo một object student với const
// // Thêm thuộc tính điểm và in ra
// const student = {
//   name: "ThuyTien",
//   age: 20,
// };
// student.grade = "A"
// student.age = 21

// console.log(student)
// // Thực hiện các thao tác sau:
// // 1. Thêm thuộc tính grade với giá trị "A"
// // 2. Thay đổi tuổi thành 21
// // 3. In ra toàn bộ thông tin student



// // String interpolation
// const name = "hoadv";
// const age = 25;
// console.log(`Xin chào, tôi là ${name}, năm nay ${age} tuổi.`);

// // Multi-line strings
// const message = `
// Đây là dòng đầu tiên
// Đây là dòng thứ hai
// Và đây là dòng thứ ba
// `;

// // Biểu thức trong template literals
// const a = 5;
// const b = 10;
// console.log(`Tổng của ${a} và ${b} là ${a + b}`);

// // Gọi hàm trong template literals
// function getCurrentTime() {
//   return new Date().toLocaleTimeString();
// }
// console.log(`Bây giờ là: ${getCurrentTime()}`);



// // Tạo template cho email thông báo
// const user = {
//   firstName: "Nguyen",
//   lastName: "Van A",
//   product: "Laptop Dell XPS",
//   price: 25000000,
//   orderDate: "2024-01-15",
// };

// // Tạo template string cho email
// const emailTemplate = `
// Họ và tên: ${user.firstName} ${user.lastName}
// máy tính đang sử dụng: ${user.product}
// giá: ${user.price}
// mua vào ngày: ${user.orderDate}
// `; // Viết template ở đây

// console.log(emailTemplate);



// // Tạo HTML template cho card sản phẩm
// const product = {
//   name: "iPhone 15",
//   price: 20000000,
//   discount: 10,
//   inStock: true,
// };

// // Tính giá sau giảm
// const finalPrice = product.price * (1 - product.discount / 100);

// // Tạo template HTML
// const productCard = `
// <div class="card">
//   <h2>Tên sản phẩm ${product.name}</h2>
//   <p>Giá gốc: ${product.price}</p>
//   <p>Giảm giá: ${product.discount}%</p>
//   <p>Giá sau khi giảm: ${finalPrice}</p>
//   <p>Tình trạng: ${product.inStock ? "con hang" : "het hang"}</p>
// </div>

// `; // Viết template ở đây

// console.log(productCard);



// // Property shorthand
// const name = "ThuyTien";
// const age = 30;

// // ES5
// const person1 = {
//   name: name,
//   age: age,
// };

// // ES6 - Property shorthand
// const person2 = {
//   name,
//   age,
// };

// // Method shorthand
// // ES5
// const calculator1 = {
//   add: function (a, b) {
//     return a + b;
//   },
// };

// // ES6 - Method shorthand
// const calculator2 = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };

// // Computed property names
// const prefix = "user_";
// const id = 123;

// const user = {
//   [prefix + id]: "hoadv Doe",
//   [`${prefix}age`]: 25,
//   // Dynamic method names
//   ["get" + prefix.toUpperCase() + id]() {
//     return this[prefix + id];
//   },
// };

// console.log(user.user_123); // "hoadv Doe"
// console(user.getUSER_123()); // "hoadv Doe"

// // Viết lại object sau sử dụng ES6 enhanced object literals
// const width = 100;
// const height = 200;
// const color = "red";

// const rectangle = {
//   width,
//   height,
//   color,
//   calculateArea() {
//     return this.width * this.height;
//   },
//   describe() {
//     return `Rectangle ${this.width}x${this.height}, color: ${this.color}`;
//   },
// };

// console.log(rectangle.describe());
// console.log("Diện tích:", rectangle.calculateArea());



// Tạo object configuration với computed property names
const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với:
// - key: `api_${env}_${version}`
// - key cho từng feature: `feature_${featureName}`
// - method: `get${env}Config()`

const config = {
  // Viết code ở đây
  key: `api_${env}_${version}`
};