// IIFE immediately Invoked Function Expression
(function db1Call() {
    console.log("databse 1 is Invoked");

})();

((method) => {
    console.log(`database 2 is Inkvoked by `, method, `method`);
})("direct");