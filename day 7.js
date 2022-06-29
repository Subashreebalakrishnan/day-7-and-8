// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    Movie_title() {
      return `The Title of the Movie ${this.title}`;
    }
  
    Movie_studio() {
      return `The Studio that made the Movie ${this.studio}`;
    }
  
    Movie_rating() {
      return `The rating of the movie ${this.rating}`;
    }
  }
  


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class Movie {

    constructor ( title,studio,rating) {

    this.title = title
    this.studio = studio
    this.rating = "PG"

    }

    Movie_title() {
        return `The Title of the Movie ${this.title}`;
      }
    
      Movie_studio() {
        return `The Studio that made the Movie ${this.studio}`;
      }
    
      Movie_rating() {
        return `The rating of the movie ${this.rating}`;
      }
    }
    


//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    Movie_title() {
      return `The Title of the Movie ${this.title}`;
    }
  
    Movie_studio() {
      return `The Studio that made the Movie ${this.studio}`;
    }
  
    Movie_rating() {
      return `The rating of the movie ${this.rating}`;
    }
  }
  
  
  const movieOne = new Movie("Casino Royale", "Eon Productions", "PG19");
  console.log(movieOne.Movie_title());
  console.log(movieOne.Movie_studio());
  console.log(movieOne.Movie_rating());
  
  const movieTwo = new Movie("Avengers", "Marvel Productions", "R");
  console.log(movieTwo.Movie_title());
  console.log(movieTwo.Movie_studio());
  console.log(movieTwo.Movie_rating());
  

// Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

const movieOne = new Movie("Casino Royale", "Eon Productions", "PG19");
console.log(movieOne.Movie_title());
console.log(movieOne.Movie_studio());
console.log(movieOne.Movie_rating());

// 2.Convert the UML diagram to Typescript class. - use number for double


class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    Circle(){
        console.log("this is circle ");
    }
    Circle(radius){
        console.log("method overriding ");
    }
    Circle(radius,color){
        console.log(this.radius,this.color)
    }
    getradius(){
        console.log("the radius of circle is "+this.radius)
    }
    setradius(newradius){
        this.radius=newradius;
    }
    getcolor(){
        console.log("the color of the circle is "+this.color);
    }
    setcolor(newcolor){
        this.color=newcolor;
    }
    getarea(){
        console.log('area of circle is '+(Math.PI*Math.pow(this.radius,2)))
    }
    getcircumference(){
        console.log('circumference of circle is '+(2*Math.PI*this.radius))
    }

}

var newcircle = new Circle(1,'green');
newcircle.getradius();
newcircle.setradius(3);
newcircle.getradius();
newcircle.getcolor();
newcircle.setcolor('red');
newcircle.getcolor();
newcircle.getarea();
newcircle.getcircumference();

// 3. Write a “person” class to hold all the details.

function Person(name,age,qualification,address,gender){
    
    this.name = name;
    this.age = age;
    this.qualification = qualification;
    this.address = address;
    this.gender = gender;
 
    this.info = function(){
        console.log(`My Name is ${this.name},`,`Gender:${this.gender},`,`Age:${this.age},`,`I have Completed ${this.qualification},`,`${this.address}.`);
    }
}

let person = new Person("subashree", 28, "Electronics and communication Engineering", "Chennai,Tamilnadu","Female");
person.info();

// 4. write a class to calculate uber price.

class uberPrice{
    constructor(distancesKm, charges){
        console.log("Your Uber price is");
        this.distancesKm = distancesKm;
        this.charges = charges;
      
    }
    getPrice(){
        return this.distancesKm * this.charges;
    }
    
}
let uberCharges = new uberPrice(5, 12)
console.log(uberCharges.getPrice());

