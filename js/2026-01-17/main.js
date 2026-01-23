const products = [
    { id: 1, name: "Gạo ST25 (5kg)", price: 18000, remaining: 20 },
    { id: 2, name: "Dầu ăn Simply (1L)", price: 65000, remaining: 15 },
    { id: 3, name: "Nước mắm Nam Ngư (750ml)", price: 45000, remaining: 30 },
    { id: 4, name: "Sữa tươi Vinamilk (1L)", price: 38000, remaining: 25 },
    { id: 5, name: "Trứng gà (10 quả)", price: 42000, remaining: 18 }
];

let orders =[]
let orderId = 1

// create
const createOrder = (productID, orderQuantity) => {
    if (!productID || !orderQuantity || orderQuantity <= 0) {
        return "Invalid input"
    }

    const product = products.find((product) => product.id === productID)
    if (!product) {
        return "Product not found"
    }

    if (product.remaining < orderQuantity) {
        return "Out of stock"
    }

    product.remaining = product.remaining - orderQuantity
    const order = {
        id: orderId++,
        productId: productID,
        quantity: orderQuantity,
    }
    orders.push(order)
    return order
}
console.log("==================Create=====================")
console.log(createOrder(1, 5));
console.log(createOrder(2, 6));



// update
const updateOrder = (orderId, newQuantity) => {
    if (!newQuantity || newQuantity <= 0) {
        return ("Quantity must be greater than 0")
    }

    const order = orders.find((order) => order.id === orderId)
    if (!order) {
        return "Order not found"
    }

    const product = products.find((product) => product.id === order.productId)
    if (!product) {
        return "Product not found"
    }

    const difference = newQuantity - order.quantity

    if (difference > 0 && product.remaining < difference) {
        return "Out of stock"
    } else {
        product.remaining = product.remaining - difference;
        order.quantity = newQuantity
        return order
    }
}
console.log("==================Update=====================")
console.log(updateOrder(5, 0))
console.log(updateOrder(1, 7))
console.log(updateOrder(2, 4))
console.log(orders)

// delete
const deleteOrder = (orderId) => {
    if (orderId === null || typeof orderId !== "number") {
        return "Invalid input"
    }

    const order = orders.find((order) => order.id === orderId)
    if (!order) {
        return "Not found"
    }

    const product = products.find((product) => product.id === order.productId)
    product.remaining = product.remaining + order.quantity

    orders.splice(orders.indexOf(order), 1)

    return orders
}
console.log("==================Delete=====================")
console.log(deleteOrder(1))
console.log(deleteOrder("8"))
console.log(deleteOrder(6))