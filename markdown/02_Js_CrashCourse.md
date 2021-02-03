
# دورة برمجة مكثفة بالجافاسكربت

{{quote {author: "الرسول محمد صلى الله عليه وسلم"}

إذَا مَاتَ ابنُ آدَمَ انقَطَعَ عمَلُهُ إلاَّ من ثَلاثٍ صَدَقَةٍ جَارِيَةٍ أو عِلمٍ يُنتَفَعُ بِهِ أو وَلَدٍ صَالِحٍ يَدعُو لَهُ

quote}}

- [دورة برمجة مكثفة بالجافاسكربت](#دورة-برمجة-مكثفة-بالجافاسكربت)
  - [الطباعة على الشاشة](#الطباعة-على-الشاشة)
  - [المعرفات](#المعرفات)
    - [أنواع المعرفات](#أنواع-المعرفات)
  - [الرياضيات](#الرياضيات)
  - [إشارات التعريف](#إشارات-التعريف)
  - [تصاعد وتنازل](#تصاعد-وتنازل)
  - [أنواع_البيانات](#أنواع_البيانات)
    - [النصوص](#النصوص)
  - [المتحكمات](#المتحكمات)
    - [مقارنات رياضية](#مقارنات-رياضية)
    - [اختصار المقارنة](#اختصار-المقارنة)
    - [منطقية](#منطقية)
    - [ثنائية](#ثنائية)
    - [اختيار مفتاحي](#اختيار-مفتاحي)
  - [الحلقات](#الحلقات)
  - [الدوال](#الدوال)
    - [مثال السوق](#مثال-السوق)
  - [تدريب](#تدريب)
    - [رسم مثلث](#رسم-مثلث)
  - [هياكل بيانات](#هياكل-بيانات)
  - [المصفوفات](#المصفوفات)
    - [forEach](#foreach)
    - [for of](#for-of)
    - [For in](#for-in)
  - [الخرائط](#الخرائط)
  - [المجموعات](#المجموعات)
  - [تعريف آخر](#تعريف-آخر)
  - [مكتبات جاهزة](#مكتبات-جاهزة)
    - [Math](#math)
    - [Date](#date)
    - [دوال داخلية](#دوال-داخلية)
  - [الصفوف/الأصناف](#الصفوفالأصناف)
  - [مراجعة الأخطاء وأنواعها](#مراجعة-الأخطاء-وأنواعها)
  - [الوحدات](#الوحدات)
  - [المولدات](#المولدات)
  - [الوعود](#الوعود)
  - [بعض الإضافات](#بعض-الإضافات)

## الطباعة على الشاشة

```
console.log(34);
```

## المعرفات

```
x + y = 5 
x = 1 
y = ? 
```

```
x + y + z = 25
x = 10 
z =  y + y  
```

### أنواع المعرفات

```
let 
var
const
```

```
const x = 10; 
const y = 14;
x = 11;
console.log(x) 
```

```
let x = 2, y = 1;
console.log(x+y);
let z= 5;
let h= 20;
console.log(h/z)
```

```
var x = 10 
var y = 20 
console.log(x*y)
```
## الرياضيات 


```
+
-
/
*
%
**
```

```
console.log(1+2)
console.log(4*5)
```


## إشارات التعريف

```
=
*=
/=
%=
+=
-=
```


```
let x =1
x += 1
console.log(x) 
x *= 4
```

منطقية 

```
<<=
>>=
&= و
^= عدم تطابق
|= أو
```
```
let x = 1 
console.log(x)
x &= 0
console.log(x)
```
## تصاعد وتنازل

```
A++
A--
++A
--A
```

```
let x = 0
console.log(x)
console.log(x++)
console.log(++x)
```


## أنواع_البيانات

```
undefined 
Boolean // True, False  
String   
Object
Function
Null    
```

```
let h = undefined
let t = true 
let x = "Hello"
let n = Null
let b = function (x) {return x*2}
let ob = {h:1,b:2}
```
التغيير بين الأنواع
ميزات كل نوع

```
Number // -(2^53 − 1) and 2^53 − 1).
+Infinity, -Infinity, and NaN
```

```
let x = 2 
let b = 0/0
let mi= -100/0
let pl= 100/0
```

```
BigInt
```

```
console.log(Number.MAX_VALUE)
// console.log(BigInt(Number.MAX_VALUE))
```

```
let x = 42;
console.log(typeof x)    
x   = 'bar'; 
x   = true;  
```

```
let x= "Hello";
console.log(result)
let y= "world"
console.log(x+y)
let z= 1;
console.log(x+y+z)
```

[أنواع البيانات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

### النصوص

```
const string1 = "A string";
const string2 = 'Also a string';
const string3 = `another string`;
```

```
const string1 = `${1+2} = 3 , 1+1 = 2`;
```

## المتحكمات

```
if
ifelse 
switch
```

### مقارنات رياضية

```
< 
<= 
>
>=
==
!=
```

```
console.log(1 < 3 )
```


```
let x= 2, y= 4;
if(x < y ){

}

if (x > y ){

}
```

```
if(){}
else{}
```

```
if(){}
else if(){}
else()
``` 

### اختصار المقارنة

```
(condition)?ifTrue:ifFalse;
```

```
a = (4 > 5 )? true: false; 
console.log(a)
```

### منطقية

```
&&
||
```

```
let x= (false&&true&&false)
console.log(x)
```

```
true,true
false,false
true,false
```

### ثنائية

```
&
|
^
```

الأعداد الثنائية

### اختيار مفتاحي

```
switch(){
    case x:
        retrun;
    case y:
        return: 
    case f:
        return 
    default:
}
```
```
```

## الحلقات

```
let result =0;
for(let i=5; i< 20; i=i+1){
    result = i + result;
}
console.log(result)

let x=5
let result1=0;
while(x < 20 ){
    console.log(x)
    x=x+5;
}

for(let i=0; i< 10; i++){
    console.log(i)
}
```

```
break
continue
Label
```

```
do{}while()
for(let i = 0 ; i < 10 ; i ++ ){}
while
```


## الدوال

```
function sum(x,y,z){
    return x+y+z 
}

function average(x,y,z){
    return (x+y+z)/3
}


function smaller(x,y){
    if(x<y){
        return x;
    }else {
        return y
    }
}
```

```
function multiplier(x){
    return function (y){
        return y * x
    }
}
```

### مثال السوق 

خوارزمية الشكلاطة
```{lang: "java"}
اذهب للمتجر
ابحث عن الشكلاطة 
اشتري الذي تحتاجه 
```

```
let req="شكلاطة"
let avai=[
"شعيرية",
"لحم",
"بصل",
"بقدونس",
"خيار",
"خس",
"بطاطا",
"شكلاطة"
]
for (let i = 0; i < avai.length ; i= i+1){
if(avai[i]==req){
console.log("موجود")
}
}

```

## تدريب

### رسم مثلث

{{index "triangle (exercise)"}}

اكتب ((حلقة)) تستدعي
`console.log`
سبع مرات لرسم المثلث في الأسفل


```{lang: null}
#
##
###
####
#####
######
#######
```

{{index [string, length]}}


{{if interactive



```
// برنامجك هنا
```
if}}

{{hint

{{index "triangle (exercise)"}}

يمكنك البدأ ببرنامج يطبع الأرقام من 1 إلى 7 ومن ثم يمكنك التعديل على البرنامج
يمكن القيام بهذا من خلال التعديل على البرنامج السابق في قسم الحلقات من الملف
[أمثلة الحلقات](#الحلقات)

يمكنك الآن التفكير بالعلاقة بين الأرقام والرسم (المربع) يمكنك ان تضيف على النتيجة الخاصة بك 
مربع لكي يقوم بزيادتاه على الشكل التالي (`+= "#"`) بهذا الشكل يمكن أن يبسط حلك ويشبه النماذج في التدريب يمكنك التفكير من خلال  [أنواع البيانات](#أنواع_البيانات)


hint}}


## هياكل بيانات

```
Array:Index
Map:Key-Value 
Set:Only one.
```

## المصفوفات

```
let x =["a","b","c","d","e","f"]
console.log(x[1])
```

```
let x =["a","b","c","d","e","f"]
console.log(x.length)
```

### forEach 

```
let ulama = ["ibn haytham" , "omar khayyam" , "al-battani" , "Al-harezmi" , "ibn-sina" , "ibn-nafis"]
ulama.forEach(element => console.log(element));
```

### for of


```
const Books = ['Book of Optics', 'Rubaiyat', `Kitab Al-Zij al-Sabi’`, "Algebra", `The Canon of Medicine` , `Al-Shamil fi al-Tibb`];
for (const element of Books) {
  console.log(element);
}
```

### For in


```
const scholarAndArea = { `ibn haytham`: `Optics`, `al-kharezmi`: `Algebra`, `ibn-sina`: `Medics` };

for (const property in scholarAndArea) {
  console.log(`${property}: ${objecscholarAndAreat[property]}`);
}
```

## الخرائط

```
let cities = new Map()
```

```
let cities = new Map()
cities.set('Sudan', "Khartom")
cities.has('Sudan') // true
cities.get('Jordan') // undefined
cities.set('Jordan', "Oman")
cities.get('Jordan') // "Oman"
cities.delete('Syria') // false
cities.delete('Sudan') // true
console.log(cities.size) // 1
```



## المجموعات

```
let myBooks = new Set()
```

```
let myBooks = new Set()
mySet.add("Sherlock")
mySet.add("Tantawi")
mySet.add("ibn Battuta")
mySet.add("Ali Omari")
mySet.add("Sherlock")
mySet.has("Sherlock")
mySet.delete("Sherlock")
mySet.size
```

##  تعريف آخر

```
[a, b] = [1, 2]
{a, b} = {a:1, b:2}
```



## مكتبات جاهزة


```
Math
Date
```


### Math 

```
console.log(
Math.cos(Math.PI),
Math.sin(Math.PI),
Math.PI
)
```

```
var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}

console.log(a,x,y)
```

### Date

```
let h = new Date
console.log(h)
```

### دوال داخلية

```
getDate()
getDay()
getFullYear()
getHours()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
```


## الصفوف/الأصناف

```
Class
```

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
    // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}
let x = new Rectangle(10,20)
console.log(x.area())
```

```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
    // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

Class Square extends Rectangle{
    constructor(size){
        super(size,size)
    }
}
```

## مراجعة الأخطاء وأنواعها

1- أخطاء منطقية
2- أخطاء تعريفية
3- أخطاء أثناء العمل


```
debugger
try...catch
throw
Error
```

```
nonExistentFunction();
```

```
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
}
```

```
try {
  throw "لم يتم كتابة الرقم"
} catch (error) {
  console.error(error);
}
```

```
let x = new Error("تعلم من أخطائك")
```


```
class CustomError extends Error {
  constructor(place, ...params) {
    super(...params)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError)
    }
    this.name = 'CustomError'
    this.place = place
    this.date = new Date()
  }
}

try {
  throw new CustomError('مكان الخطأ', 'أعد المحاولة!')
} catch(e) {
  console.error(e.name)    //CustomError
  console.error(e.place)     
  console.error(e.message) 
  console.error(e.stack)   
}
```

## الوحدات

type="module"

```
export
import
```

```
export const name = 'square';

export function draw( length, x, y, color) {
  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
```

```
export { name, draw, reportArea, reportPerimeter };
```

```
import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
```

## المولدات

```
Generator
GeneratorFunction
AsyncGeneratorFunction
AsyncGenerator
```

```
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = generator(); 
console.log(gen.next().value); 
console.log(generator().next().value); 
console.log(generator().next().value); 
```

```
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite(); 
console.log(generator.next().value); 
console.log(generator.next().value); 
console.log(generator.next().value); 
```

## الوعود

```
Promise
AsyncFunction
```

```
const CallServer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('You have done.');
  }, 300);
});

CallServer.then((value) => {
  console.log(value);
});

console.log(CallServer);
```

```
const CallServer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('You have done.');
  }, 300);
});

async function asyncCall() {
  console.log('calling');
  const result = await CallServer();
  console.log(result);
}

asyncCall()
```


## بعض الإضافات

[مصدر موثوق للقراءة](https://developer.mozilla.org/en-US/)
[أنواع البيانات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
[مصدر](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)