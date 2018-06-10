//console.log('This is outline !');
var ss='Sanath'
//console.log('The name is : '+ss);


let x=10;
//console.log('x is : '+x);


var obj1={
  age:18,
  name:'Sanath',
  sex:'male'
};

//console.log(obj1);
//console.log(obj1.age);
obj1['age']++;

obj1.name='R.Sanath';
var obj2=new Object();
obj2.age=16;
obj2.name='R.Sharad';
//console.log(obj1);
//console.log(obj2);

//alert('Hi there!')
//obj2.sex=prompt('Enter Sharad\'s sex : ')
////console.log('Updating ....... ');
////console.log(obj2);


//function expression
var tt=function(ss){
  return 2018 -ss;
}

console.log(tt(2001));


var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1998,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) {
        return 2016 - this.yearOfBirth;
    }
};

//console.log(john.calculateAge());

//console.log(john.calculateAge(2001));













