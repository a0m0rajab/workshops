
# ورشة مدخل للبرمجة باستخدام جافاسكربت

{{quote {author: "الرسول محمد صلى الله عليه وسلم"}

سلُوا اللهَ علمًا نافعًا، وتَعَوَّذُوا باللهِ منْ علمٍ لا ينفعُ

quote}}

## الطباعة على الشاشة

```
console.log(34);
```

## المتغيرات


```
let x = 2, y = 1;
console.log(x+y);
let z= 5;
let h= 20;
console.log(h/z)
```

## المتحكمات

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
## الرياضيات 

معادلة درجة ثانية
x^2 + 4x + 4 = 0  

```
function delta(a,b,c){
    return Math.sqrt((b*b)-(4*a*c))
}
```
x^2 + 4x + 4 = 0 
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
## أنواع البيانات

```
let x= "Hello";
console.log(result)
let y= "world"
console.log(x+y)
let z= 1;
console.log(x+y+z)
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

## خوارزميات جاهزة
Math 

```
console.log(
Math.cos(Math.PI),
Math.sin(Math.PI),
Math.PI
)
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
[even number printing example](program_structure#loops)

يمكنك الآن التفكير بالعلاقة بين الأرقام والرسم (المربع) يمكنك ان تضيف على النتيجة الخاصة بك 
مربع لكي يقوم بزيادتاه على الشكل التالي (`+= "#"`) بهذا الشكل يمكن أن يبسط حلك ويشبه النماذج في التدريب

hint}}