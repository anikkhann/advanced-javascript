const students = [
    {id:21, name: 'Ashik'},
    {id:31, name: 'Anik'},
    {id:41, name: 'Ashfaq'},
    {id:71, name: 'Ashadul'}

];
const names = students.map(s => s.name);
//console.log(names);
const ids = students.map(s => s.id);
//console.log(ids);
const bigger=students.filter(s => s.id>40);
console.log(bigger);
const bigger1=students.find(s => s.id>40);
console.log(bigger1);