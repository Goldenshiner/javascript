const details={
    name: "John",
    age: 30,

    orderStatus: function() {
        return "Order is being processed";
    }
}

console.log(Object.getOwnPropertyDescriptor(details, "name"));

Object.defineProperty(details, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(details, "name"));