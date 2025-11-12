const { use } = require("react");

function getFirstLast(array) {
  // Your code here
  return [array[0], array[array.length - 1]];
}

console.log(getFirstLast([1, 2, 3, 4])); // [1, 4]



function swapElements(arr) {
  // Your code here
  const doiViTri = arr[1]
  arr[1] = arr[3]
  arr[3] = doiViTri
  return arr
}

console.log(swapElements([1, 2, 3, 4, 5])); // [1, 4, 3, 2, 5]



const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user) {
  // Your code here
  const userName = user.personalInfo.name
  const userEmail = user.personalInfo.contact.email
  return {
    name: userName,
    email: userEmail
  }
}

console.log(getUserInfo(user));
// { name: 'javascript', email: 'javascript@email.com' }



function createProduct({ name, price, category = "general", inStock = true }) {
  // Your code here
  return {
    name,
    price,
    category,
    inStock
  }
}

const product = createProduct({ name: "Laptop", price: 999 });
console.log(product);
// { name: 'Laptop', price: 999, category: 'general', inStock: true }



// Viết lại hàm này sử dụng async/await
// function processOrder(orderId, callback) {
//   getOrder(orderId, (order) => {
//     getUser(order.userId, (user) => {
//       getProducts(order.productIds, (products) => {
//         callback({ order, user, products });
//       });
//     });
//   });
// }

async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId)
    const user = await getUser(order.userId)
    const products = await getProducts(order.productsId)

    return {
      order,
      user,
      products
    }
  }
  catch (error) {
    console.error("Processing failed:", error)
  }
}


async function safeApiCall(apiFunction, ...args) {
  // Your code here
  try {
    const data = await apiFunction(...args)
    return [null, data]
  } catch (error) {
    return [error, undefined]
  }
}