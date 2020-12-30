
# دورة برمجة مكثفة بالجافاسكربت

{{quote {author: "الرسول محمد صلى الله عليه وسلم"}

سلُوا اللهَ علمًا نافعًا، وتَعَوَّذُوا باللهِ منْ علمٍ لا ينفعُ

quote}}

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

## أنواع_البيانات

```
undefined 
Boolean // True, False  
String 
BigInt  
Object
Function
Null    
```

```
Number // -(2^53 − 1) and 2^53 − 1).
+Infinity, -Infinity, and NaN
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
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
```

## المتحكمات

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

### ثنائية

```
&
|
^
```

### اختيار مفتاحي

```
swtich(){
    case x:
        retrun;
    case y:
        return: 
    case f:
        return 
    default:
}
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

```
GeneratorFunction
AsyncGeneratorFunction
Generator
AsyncGenerator
AsyncFunction
Promise
```
## Assignments

```
=
*=
/=
%=
+=
-=
<<=
>>=
>>>=
&=
^=
|=
[a, b] = [1, 2]
{a, b} = {a:1, b:2}
```

# Increment & decrement

```
A++
A--
++A
--A
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
do{}while()
for(let i = 0 ; i < 10 ; i ++ ){}
while
```

```
for each...in
for...in
for...of
for await...of
```

```
break
continue
```

## أنماط برمجية

```
Map
Set
```

## مصفوفات

```
let x =["a","b","c","d","e","f"]
console.log(x[1])
```
```
let x =["a","b","c","d","e","f"]
console.log(x.length)
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

## مكتبات جاهزة


```
Math
Date
```


Math 

```
with

console.log(
Math.cos(Math.PI),
Math.sin(Math.PI),
Math.PI
)
```

## الرياضيات 

[القاعدة العامة](../extras/index.html)

معادلة درجة ثانية

x^2 + 4x + 4 = 0  

```
function delta(a,b,c){
    return Math.sqrt((b*b)-(4*a*c))
}
```
x^2 + 4x + 4 = 0 

ماذا إن كانت النتيجة بالسالب؟
```
function quadraticZero(a,b,c){
    return -b/2*a
}

function quadraticMinus(a,b,c){
    return -b/2*a
}

function quadraticPlus(a,b,c){
    return -b/2*a
}
```

## الصفوف

```
Class
debugger
export
import
label
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

## مراجعة الأخطاء وأنواعها

```
throw
try...catch
```


## بعض الإضافات
[مصدر موثوق للقراءة](https://developer.mozilla.org/en-US/)

[جدول المصطلحات](../extras/index.html)

[الآلي](../robot/index.html)

[أنواع البيانات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[مصدر](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)