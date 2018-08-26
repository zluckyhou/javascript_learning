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

// high-order-function
function add(x,y,f){
	return f(x) + f(y);
}

var x = add(5,-6,Math.abs);
console.log(x);


function pow(x){
	return x**2;
}

//var arr = [1,2,3,4,5,6,7,8];
var i,arr = [];
for (i=1;i<=10;i++){
	arr.push(i);
}
console.log(`arr is ${arr}`);
var res = arr.map(pow);
console.log(`arr map result is ${res}`);

var arr = [1,2,4,5,9,6,15];
var r = arr.filter(function(x){return x % 2!==0;});
console.log(`r is ${r}`);

// filter 

var arr = ['A','','B',null,undefined,'C',' '];
var r = arr.filter(function(s){
	return s && s.trim();
});

console.log(`arr is ${arr}, while r is ${r}`);

// filter 去除array中的重复元素
var 
	r,
	arr = ['apple', 'strawberry', 'banana', 'pear', 'apple', 'orange', 'orange', 'strawberry'];

r = arr.filter(function (element,index,self){
	return self.indexOf(element) === index;
});
console.log(`arr is ${arr}, while r is ${r}`);

// sort
var arr = [10,20,1,2];
arr.sort(function(x,y){
	if (x<y){
		return -1;
	}
	if (x>y){
		return 1;
	}
	return 0;	
});
console.log(arr);


var arr = ['Google','apple','Microsoft'];
arr.sort(function(s1,s2){
	x1 = s1.toUpperCase();
	x2 = s2.toUpperCase();
	if (x1>x2){
		return 1;
	}
	else if (x1< x2){
		return -1;
	}
	else 
		return 0;
});
console.log(arr);


// closure

//函数作为返回值



function lazy_sum(arr){
	var sum = function(){
		return arr.reduce(function(x,y){
			return x+y;
		});
}
	return sum;
}

var f = lazy_sum([1,2,3,4,5]);
f();


function create_counter(initial){
	var x = initial || 0;
	return {
		inc:function(x){
			x += 1;
			return x;
		}
	}
}

var c1 = create_counter();
c1.inc();
c1.inc();
c1.inc();

var c2 = create_counter(10);
c2.inc();
c2.inc();
c2.inc();

function make_pow(n){
	return function(x){
		return Math.pow(x,n)
	}
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);

console.log(`pow2(5) is ${pow2(5)}`);
console.log(`pow3(7) is ${pow3(7)}`);


// arrow function

x => x*x;
var fn = x => x*x;
console.log(`x => x*x: fn(3) = ${fn(3)}`);

x => {
	if (x>0){
		return x*x;
	}
	else 
		return -x*x;
}

(x,y,...rest) => {
	var i,sum = x+y;
	for (i=0;i<rest.length;i++){
		sum += rest[i];
	}
	return sum;
}

x => ({foo:x})

var obj = {
	birth:1990,
	getAge:function(){
		var b = this.birth;
		var fn = () => new Date().getFullYear()-this.birth;
		return fn();
	}
}

console.log(obj.getAge());


var obj = {
	birth:1990,
	/*
	getAge:function(){
	//	var b = this.birth;
	//	var fn = () =>  new Date().getFullYear()-b;
		return new Date().getFullYear()-this.birth;
	}
	*/
	age:new Date().getFullYear()-this.birth
}

console.log(`age is ${obj.age}`);

var obj = {
	birth:1990,
	getAge:function(year){
		var b = this.birth;
		var fn = (y) => y-this.birth;
//		return fn.call({birth:2000},year);
		return fn(year);
	}
}

console.log(obj.getAge(2018));
console.log(obj.getAge.call({birth:2000},2018))

//generator

function foo(x){
	return x*x;
}

var r = foo(1);

function* foo(x){
	yield x+1;
	yield x+2;
	return x+3;
}

function fib(max){
	var 
		t,
		a=0,
		b=1,
		arr = [0,1];
	while (arr.length<max){
		[a,b] = [b,a+b];
		arr.push(b);
	}
	return arr;
}

function* fib(max){
	var 
		t,
		a=0,
		b=1,
		n=0;
	while (n<max){
		yield a;
		[a,b] = [b,a+b];
		n++;
	}
	return;
}

var f = fib(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


var f = fib(10);
/*
while (f.next().value){
	console.log(f.next());
}
*/

for (var x of f){
	console.log(x);
}

//object

//Date

var now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds());
console.log(now.getTime());


//RegExp

var re1 = /ABC\-001/;
var re2 = new RegExp('ABC\\-001');
console.log(re1);
console.log(re2)

var re = /^\d{3}\-\d{3,8}$/;
re.test('010-12345');
re.test('010-1234x');
re.test('010 12345');

console.log('a b c   d    e'.split(/\s+/));
console.log('a,b,c  d'.split(/[\s\,]+/));
console.log('a,b;;c  d'.split(/[\s\,\;]+/));

var re = /^(\d{3})[\-\s](\d{3,8})$/;
console.log(re.exec('010-12345'));
console.log(re.exec('010 12345'));

//贪婪匹配
var re = /^(\d+)(0*)$/;
console.log(re.exec('123000'));

var re = /^(\d+?)(0*)$/;
console.log(re.exec('123000'));

var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;
console.log(re.exec(s));

//JSON


var xiaoming = {
	name:'小明',
	age:14,
	gender:true,
	height:1.65,
	grade:null,
	'middle-school':'\"W3D\" Middle School',
	skills:['JavaScript','Java','Python','Lisp']
};

var s = JSON.stringify(xiaoming,null,'  ');
console.log(s);

var s = JSON.stringify(xiaoming,['name','skills','age'],'	');
console.log(s);

function convert(key,value){
	if (typeof value==='string'){
		return value.toUpperCase();
		}
	return value;
}

console.log(JSON.stringify(xiaoming,convert,'	'));


var xiaoming = {
	name:'小明',
	age:14,
	gender:true,
	height:1.65,
	grade:null,
	'middle-school':'\"W3D\" Middle School',
	skills:['JavaScript','Java','Python','Lisp'],
	/*
	toJSON:function () {
		return {
			'Name':this.name,
			'Age':this.age
		};
	}
	*/
	toJSON:() => ({'Name':this.name,'Age':this.age})

};

console.log(JSON.stringify(xiaoming));

//反序列化


console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name":"小明","age":14}'));

var obj = JSON.parse('{"name":"bob","age":16}',(key,value) => {if (key==='name'){return value+'同学';} else {return value;}});

console.log(JSON.stringify(obj,null,'	'));

var url = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%202151330&format=json';

/*
$.getJSON(url,function (data){
	var city = data.query.results.channel.location.city;
	var forecast = data.query.results.channel.item.forecase;
	var result = {
		city:city,
		forecast:forecase
	};
	alert(JSON.stringify(result,null,'	'));
});
*/

// create object

var arr = [1,2,3];
function foo(){
	return 0;
}

function Student(name){
	this.name = name;
	this.hello = ()=> {alert('hello, '+ this.name+'!')}
}

var xiaoming = new Student('小明');
console.log(xiaoming.name);
xiaoming.hello();

var
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件:
fileInput.addEventListener('change', function () {
    // 清除背景图片:
    preview.style.backgroundImage = '';
    // 检查文件是否选择:
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用:
    var file = fileInput.files[0];
    // 获取File信息:
    info.innerHTML = '文件: ' + file.name + '<br>' +
                     '大小: ' + file.size + '<br>' +
                     '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!');
        return;
    }
    // 读取文件:
    var reader = new FileReader();
    reader.onload = function(e) {
        var
            data = e.target.result; // 'data:image/jpeg;base64,/9j/4AAQSk...(base64编码)...'            
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    // 以DataURL的形式读取文件:
    reader.readAsDataURL(file);
});





