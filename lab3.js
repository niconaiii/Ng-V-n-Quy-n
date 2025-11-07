// Function 1
// function multiply(a, b) {
//     return a * b;
// }

const multiply = (a, b) => {
    return a * b
}
console.log(multiply(13, 20))

// Function 2
// function isPositive(number) {
//     return number >= 0;
// }

const isPositive = (number) => {
    return number >= 0
}
console.log(isPositive(100))
// Function 3
// function getRandomNumber() {
//     return Math.random();
// }

const getRandomNumber = () => {
    return Math.random()
}
console.log(getRandomNumber())

// Function 4
// document.addEventListener("click", function () {
//     console.log("Clicked!");
// });

document.addEventListener("click", () => {
    console.log("clicked!")
})



// function createUser(name, age, isAdmin) {
//   if (name === undefined) name = "Anonymous";
//   if (age === undefined) age = 18;
//   if (isAdmin === undefined) isAdmin = false;

//   return {
//     name: name,
//     age: age,
//     isAdmin: isAdmin,
//   };
// }

function createUser(name = "Anonymous", age = 18, isAdmin = false) {
    return {
        name: name,
        age: age,
        isAdmin: isAdmin,
    };
}



const mergeArrays = (...arrays) => {
    return arrays.reduce((merged, currentArray) => {
        return [...merged, ...currentArray]
    }, [])
}

const arr1 = [1, 2]
const arr2 = [3, 4, 5]
const arr3 = [6]

console.log("mang hop nhat: ", mergeArrays(arr1, arr2, arr3))



const sumAll = (...numbers) => {
  return numbers.reduce((total, currentNumber) => total + currentNumber, 0);
};

console.log("tong cua 1, 2, 3:", sumAll(1, 2, 3));
console.log("tong cua 5, 10, 15, 20:", sumAll(5, 10, 15, 20));



const createProduct = (
  name = "san pham khong ten",
  price = 0,
  inStock = false
) => {
  return {
    name,
    price,
    inStock,
  };
};

console.log("san pham mac dinh:", createProduct());
console.log("san pham tuy chinh:", createProduct("Laptop X1", 1200, true));



const shoppingCart = (customerName, ...products) => {
  const totalItems = products.length;

  return {
    customer: customerName,
    orderId: `ORD-${Date.now()}`,
    items: products,
    totalItems: totalItems,
    notes: "Rest parameters da thu thap cac san pham."
  };
};

const order1 = shoppingCart(
  "Nguyen Van A",
  "Laptop abc",
  "Chuot khong day",
  "ban phim co"
);

console.log("Don hang 1:", order1);
console.log("---");

const order2 = shoppingCart(
  "Tran Thi B",
  "Ao thun cotton",
  "Quan jean slim fit"
);

console.log("Don hang 2:", order2);