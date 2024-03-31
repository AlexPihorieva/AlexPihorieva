// let person = {
//     name: "John", 
//     age: 30       
// };

// console.log(
//     "Name:", person.name,
//     "Age:", person.age);

// let person = {
//     name: {
//         firstName: "John",
//         lastName: "Doe"
//     },
//     age: 25,
//     bio: function() {
        
//         return `firstName ${this.name.firstName}, lastName ${this.name.lastName}, age ${this.age}`
//     },
//     introduceSelf: function(){
//         return "Hi! I'm " + this.name.firstName;
//        }
// };


// console.log("First Name:", person.name.firstName);
// console.log("Last Name:", person.name.lastName);
// console.log("Age:", person.age);
// console.log("Bio:", person.bio());
// console.log("introduceSelf:", person.introduceSelf());


// // 5
//  function createPerson(name){
//     const obj = {};
//     obj.name = name;
//     obj.introduceSelf = function(){
//         return "Hi! I'm " + obj.name;  
//     }

//     return obj;
//  }

//  let p1 = createPerson('Kate')
//  let p2 = createPerson('Pet')

//  console.log(p1.introduceSelf())
//  console.log(p2.introduceSelf())


//6

// function Person(name){
//     this.name = name

//     this.introduceSelf = function(){
//         return "Hi! I'm " + this.name;  
//     }

// }

// let mary = new Person('Mary')
// let tom = new Person('Tom')

// console.log(mary.introduceSelf())
// console.log(tom.introduceSelf())
// console.log('mary has "prop"', Object.hasOwnProperty(mary, "prop"))




let DirtyMartini = {
    ingredients: {
        fluidOuncesGin: 6,
        dashDryVermouth: 1,
        fluidOuncуDrineFromOliveJar: 1,
        stuffedGreenOlives: 1
    },

    english_please(){
        return `
        ingredients:
            ${this.ingredients.fluidOuncesGin} fluid ounces gin
            ${this.ingredients.dashDryVermouth} dash dry vermouth (0.0351951ml) 
            ${this.ingredients.fluidOuncуDrineFromOliveJar} fluid ounce brine from olive jar
            ${this.ingredients.stuffedGreenOlives} stuffed green olives
        
        `
    },

    excuse_my_french(){
        let  fluid_once_to_ml_koef = 28.4131
        return `
        ingredients:
            ${this.ingredients.fluidOuncesGin * fluid_once_to_ml_koef} ml de gin
            ${this.ingredients.dashDryVermouth} trait de vermouth sec (0.0351951ml) 
            ${this.ingredients.fluidOuncуDrineFromOliveJar * fluid_once_to_ml_koef} ml de saumure du pot d'olive
            ${this.ingredients.stuffedGreenOlives} olives vertes farcies
        
        `
    }
}

console.log(DirtyMartini.english_please())
console.log(DirtyMartini.excuse_my_french())




