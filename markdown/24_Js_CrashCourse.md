
# دورة برمجة مكثفة بالجافاسكربت

{{quote {author: "الرسول محمد صلى الله عليه وسلم"}

سلُوا اللهَ علمًا نافعًا، وتَعَوَّذُوا باللهِ منْ علمٍ لا ينفعُ

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

التغيير بين الأنواع
ميزات كل نوع

```
Number // -(2^53 − 1) and 2^53 − 1).
+Infinity, -Infinity, and NaN
```

```
BigInt
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


## بعض الإضافات
[مصدر موثوق للقراءة](https://developer.mozilla.org/en-US/)

[جدول المصطلحات](../extras/index.html)

[الآلي](../robot/index.html)

[أنواع البيانات](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[مصدر](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)