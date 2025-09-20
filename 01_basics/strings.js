const s1="Ani"
const s2=35
//console.log(s1+s2);
//String intepolation -$ and ``
//console.log(`hello ${s1} your score is ${s2}`);
//console.log(s1.length);
const gameName=new String('AniCj')
//console.log([gameName[0],gameName.__proto__,gameName.length,gameName.toUpperCase(),gameName.charAt(2),gameName.indexOf('C')]);
//substring,slice,trim,split,include 
const newgn= gameName.substring(0,3);
//console.log(newgn);
const newgn1=gameName.slice(4,1)
//console.log(newgn1);
const url="https:ani.com/ani 021"
//console.log([url.replace(' ','_'),url.includes('ani')]);
console.log(url.split('_'));