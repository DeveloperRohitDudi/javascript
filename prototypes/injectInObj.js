const movieList = ["tenet", "interstellar"]

const movieRatings = {
    tenet: 9.0,
    interstellar: 9.3,
    theMartian: 9.1,
    printRating: function (name) {
        console.log(`the rating of ${name} is: ${this[name]}`);
    }
}
Object.prototype.rohit = function (message) {
    console.log("rohit is available in every fucking object.", message);
} // now this is the method that applies on all objects

movieList.rohit("call by array object");
movieRatings.rohit("call by obj object");

movieRatings.printRating("theMartian");