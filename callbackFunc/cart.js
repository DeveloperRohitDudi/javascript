const shoppingCart = [
    {
        course: "Ml & Ai",
        price: 2999
    },
    {
        course: "Data Science",
        price: 6999
    },
    {
        course: "App Dev",
        price: 4999
    },
    {
        course: "backend Dev",
        price: 1999
    },
]

const totalPrice = shoppingCart.reduce((acc, item) => (acc + item.price), 0);
console.log(`total price to pay`, totalPrice);
