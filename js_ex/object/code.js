let obj = {name:"Alice", id:122,isStudent:true};
console.log(obj);
//앨리스 표시
console.log(obj.name);
console.log(obj["name"]);

//덮어쓰기
obj.id=30;
console.log(obj.id);
obj["isStudent"] = false;
console.log(obj["isStudent"]);

for(let key in obj){
    console.log(key + ":" + obj[key]);
}