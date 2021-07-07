/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
* 2. implicit binding
* 3. new binding
* 4. explicit binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
    console.log(this);
// Principle 2

// code example for Implicit Binding
    const obj = {
        name: 'ray',
        age: 27,
        speak: function(){
            return `I am ${this.name}, I am ${this.age}.`;
        }
    }
    console.log(obj.speak());
// Principle 3

// code example for New Binding
function Human(toy){
    this.toy = toy;
    this.play = function(){
        return `Human treat ${this.toy} as a toy`;
    }
}

const luke = new Human('basket-balls');

console.log(luke.play());

// Principle 4

// code example for Explicit Binding

const animal = {
    name: 'Rabbit'
  }
  
  function eat(){
    return `${this.name} eats food.`;
  }
  
  console.log(eat.apply(animal));