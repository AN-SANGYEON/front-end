//배열 초기화
let arr = [1,2,3,"Alice",12.5]
//내용물 확인
console.log(arr);
console.log(arr.length);
//배열 값을 추가
arr.push("추가행");
console.log(arr);
//제일 마지막 데이터 배열값 삭제 
arr.pop();
console.log(arr);

let arr2 = new Array(5);
arr2[0] = 23;
console.log(arr2);

//for-of
for(let a of arr){
    console.log(a);
}