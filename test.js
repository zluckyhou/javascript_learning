var name='lucy';
var age=20;
var message=`hello ${name}, you are ${age} years old`;

// function-arguments

function foo(x) {
    console.log('x = ' + x); // 10
    for (var i=0; i<arguments.length; i++) {
        console.log('arg ' + i + ' = ' + arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);

function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9


function foo(a,b, ...rest){
	console.log('a = '+a);
	console.log('b = '+b);
	console.log(rest);
}

foo(1,2,3,4,5);

function sum(...rest) {
   var s = 0;
   for (var i=0;i<rest.length;i++){
       s = s+rest[i];
      };
   return s;
}

var i,args = [];
for (i=1;i<=100;i++){
	args.push(i);
}

console.log('1+..+100 = '+sum.apply(null,args))

const PI=3.14;
//PI=3;
PI;

// 解构赋值
var [x,y,z] = ['hello','JavaScript','ES6'];
console.log(`x = ${x}, y = ${y}, z = ${z}`)

var person = {
	name:'小明',
	age:20,
	gender:'male',
	passport:'G-12345678',
	school:'No.4 middle school'
};

var {name,age,passport:id,gender='male'} = person;
console.log(`name = ${name}, age = ${age}, passport = ${id}, gender = ${gender}`);


var x=1,y=2;
[x,y] = [y,x];
console.log(`x = ${x}, y = ${y}`)

//创建一个Date对象


function buildDate({year,month,day,hour=0,minute=0,second=0}){
	return new Date(`${year}-${month}-${day} ${hour}:${minute}:${second}`)
}

var dt = buildDate({year:2017,month:1,day:1});
console.log(dt);
console.log(`Now is ${Date()}`);




//map and set
//map
var m = new Map([['michael',95],['bob',75],['tracy',85]]);
m.get('michael');

m.set('lily',100);
m.has('adam');
m.get('lily');

//set

var s1 = new Set();
var s2 = new Set([1,2,2,3,4]);
s1.add(1);
s1.add(2);
s1.add(1);
console.log(s1);

//方法：在一个对象中绑定函数，称为这个对象的方法

var xiaoming = {
	name:'小明',
	birth:'1990',
	age:function(){
		var y = new Date().getFullYear();
		return y-this.birth;
	}
}

console.log(xiaoming.age);
console.log(xiaoming.age());

//this and apply

// this:this object
//apply(this object,array) array: this object arguments

function getAge() {
	var y = new Date().getFullYear();
	return y-this.birth;
}

var xiaoming = {
	name:'小明',
	birth:1990,
	age:getAge
}

console.log(xiaoming.age());
getAge();
console.log(getAge.apply(xiaoming,[]));













