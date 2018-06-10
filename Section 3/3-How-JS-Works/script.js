///////////////////////////////////////
// Lecture: Hoisting




console.log(this);

/*console.log(this);
calculateAge1();
function calculateAge1(yearOfBirth){
  console.log(this);
  calculateAge2();
}

function calculateAge2(yearOfBirth){
  console.log(this);
}
*/
var ss1={
  name:'Sanath',
  age:20,
  cc:function(){
    this.yearOfBirth=2016-this.age;
    console.log(this);
  }
};
ss1.cc();

var ss2={
  name:'Sharad',
  age:17
};
ss2.cc=ss1.cc;
ss2.cc();




///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









