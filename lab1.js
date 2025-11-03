// Bài tập 1: Sử dụng let, const và Template Literals

// Viết hàm tính chỉ số BMI (Body Mass Index) với công thức:
// 👉 BMI = weight / (height * height)
// function calculateBMI(weight, height) {
// TODO: Sử dụng const cho các hằng số
// TODO: Sử dụng template literals để tạo thông báo
// TODO: Phân loại BMI theo:
// - Dưới 18.5: Thiếu cân
// - 18.5 - 24.9: Bình thường
// - 25 - 29.9: Thừa cân
// - Trên 30: Béo phì
// }
function caculateBMI(weight, height) {
            const BMI = weight / (height * height)
            let category = ""
            if (BMI < 18.5) {
                category = "Thiếu cân"
            } else if (BMI < 24.9) {
                category = "Binh thuong"
            } else if (BMI < 29.9) {
                category = "Thua can"
            } else {
                category = "Beo phi"
            }
            return `Chỉ số BMI của bạn là ${BMI.toFixed(2)} - phan loai: ${category}`
        }
        
        document.getElementById("bmi").innerHTML = caculateBMI(52, 1.59)

// Ví dụ sử dụng
// console.log(calculateBMI(70, 1.75)); // "BMI: 22.86 - Phân loại: Bình thường"

// Bài tập 2: Enhanced Object Literals

// Tạo đối tượng quản lý sách sử dụng enhanced object literals.
// function createBook(title, author, year, price) {
// // TODO: Sử dụng shorthand properties
// // TODO: Thêm method getBookInfo() trả về thông tin sách
// // TODO: Thêm method tính giá sau giảm giá (discount %)
// // TODO: Sử dụng computed property names
// }
function createBook(title, author, year, price) {
    return {
    title,
    author,
    year,
    price,
    getBookInfo() {
      return `${this.title} - ${this.author} (${this.year}) - Giá: ${this.price.toLocaleString()} VND`;
    },
    ["calculateDiscount"](discount) {
      const final = this.price * (1 - discount / 100);
      return `Sau khi giảm ${discount}%: ${final.toLocaleString()} VND`;
    }
  };
}


// Ví dụ sử dụng
const book = createBook("JavaScript ES6", "John Doe", 2023, 200000)
document.getElementById("book").innerHTML = `${book.getBookInfo()}<br><br>${book.calculateDiscount(10)}`