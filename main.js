let array = ['Olma', "Nok", 'Uzum', 'Tarvuz'];
alert(`Bizda "Array" ning uzunligi ${array.length} ta`);
console.log(array.length);
confirm(`Siz aminmisiz "Array" ning uzunligi ${array.length} ta ekanligiga`);
array.shift();
alert(`Ana endi bizda "Array" ning uzunligi ${array.length} ta`);
console.log(array.length);